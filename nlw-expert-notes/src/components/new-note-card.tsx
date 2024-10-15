import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

interface NewNoteCardProps {
  onNoteCreated: (content: string) => void
}

let speechRecognition: SpeechRecognition | null = null
export function NewNoteCard({ onNoteCreated }: NewNoteCardProps) {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true)
  const [shouldDisableTheButton, setShouldDisableTheButton] = useState(true)
  const [isRecording, setIsRecording] = useState(false)
  const [content, setContent] = useState('')

  function handleStartEditor() {
    setShouldShowOnboarding(false)
  }

  function handleContentChanged(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setShouldDisableTheButton(false)
    setContent(event.target.value)
    
    if(event.target.value === '') {
      setShouldShowOnboarding(true)
      setShouldDisableTheButton(true)
    }
  }

  function handleSaveNote() {
    onNoteCreated(content)
    setContent('')
    setShouldShowOnboarding(true)
    setShouldDisableTheButton(true)

    toast.success('Nota criada com sucesso!')
  }

  function handleStartRecording() {
    const isSpeechRecognitionAPIAvailable = 'SpeechRecognition' in window 
    || 'webkitSpeechRecognition' in window

    if(!isSpeechRecognitionAPIAvailable) {
      alert('Infelizmente seu navegador não suporta a API de gravação!')
      return
    }

    setIsRecording(true)
    setShouldShowOnboarding(false)

    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition

    speechRecognition = new SpeechRecognitionAPI()

    speechRecognition.lang = 'pt-BR'
    speechRecognition.continuous = true
    speechRecognition.maxAlternatives = 1
    speechRecognition.interimResults = true

    speechRecognition.onresult = (event) => {
      const transcription = Array.from(event.results).reduce((text, result) => {
        return text.concat(result[0].transcript)
      }, '')

      setContent(transcription)
    }

    speechRecognition.onerror = (event) => {
      console.error(event)
    }

    speechRecognition.start()
  }

  function handleStopRecording() {
    setIsRecording(false)
    setShouldDisableTheButton(false)

    if(speechRecognition !== null) {
      speechRecognition.stop()
    }
  }

    return(
      <Dialog.Root>
        <Dialog.Trigger className='rounded-md bg-slate-700 p-5 flex flex-col gap-3 text-left outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
          <span className='text-sm font-medium text-slate-200'>
            Adicionar Nota
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            Grave uma nota em áudio que será convertida para texto automáticamente.
          </p>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className='inset-0 fixed bg-black/50' />
          <Dialog.Content className='fixed inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] bg-slate-700 md:rounded-med flex flex-col outline-none overflow-hidden'>
            <Dialog.Close className='absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100'>
              <X  className='size-5' />
            </Dialog.Close>

            <form className='flex-1 flex flex-col'>
              <div className='flex flex-1 flex-col gap-3 p-5'>
                <span className='text-sm font-medium text-slate-300'>
                  Adicionar nota
                </span>
                {
                  shouldShowOnboarding ? 
                  (
                    <p className='text-sm leading-6 text-slate-400'>
                      Comece <button className='font-medium text-lime-400 hover:underline' type='button' onClick={handleStartRecording}>gravando uma nota</button> em áudio ou se preferir <button className='font-medium text-lime-400 hover:underline' type='button' onClick={handleStartEditor}>utilize apenas texto</button>.
                    </p>
                  )
                  :
                  (
                    <textarea 
                    autoFocus 
                    className='text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none' 
                    onChange={handleContentChanged}
                    value={content}
                    />
                  )
                }
              </div>

              {isRecording ? (
                <button 
                className='w-full flex items-center justify-center gap-2 bg-slate-900 py-4 text-center text-sm text-slate-300 outline-none font-medium hover:text-slate-100'
                type='button'
                onClick={handleStopRecording}
                >
                  <div className='size-3 rounded-full bg-red-500 animate-pulse' />
                  Gravando! (clique p/ interromper)
                </button>
              )
              : (
                <button 
                className='w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500 disabled:bg-lime-500/50'
                type='button'
                onClick={handleSaveNote}
                disabled={shouldDisableTheButton}
                >
                  Salvar nota
                </button>
              )
            }
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
}