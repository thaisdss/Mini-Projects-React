import { FormEvent, useState } from "react";

export function useForm(steps: JSX.Element[]) {
    const [currentStep, setCurrentStep] = useState(0);

    function changeStep(index: number, event?: FormEvent) {
        event?.preventDefault();

        if(index < 0 || index >= steps.length) return;

        setCurrentStep(index);
    }

    return { 
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isFirstStep: currentStep === 0 ? true : false,
        isLastStep: currentStep + 1 === steps.length ? true : false,
    };
}