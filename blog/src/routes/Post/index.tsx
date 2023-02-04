import * as C from "./styles";
import { useParams } from "react-router-dom";
import { useGetPost } from "../../hooks/useGetPost";
import { useGetComments } from "../../hooks/useGetComments";
import { AiOutlineSmile } from "react-icons/ai";

export function Post() {
    const { id } = useParams();
    const post = useGetPost(`/posts/${id}`);
    const comments = useGetComments(`/posts/${id}/comments`)
    
    return(
        <C.Container>
            <h1>{post?.title}</h1>
            <p className="post-body">{post?.body}.</p>
            <C.ContainerComments>
                <h2>Comentários</h2>
                {comments.length === 0 && <p>Carregando...</p> }
                {comments.length > 0 && (
                    comments.map(comment => (
                        <C.Comments key={comment.id} >
                            <div>
                                <AiOutlineSmile color="#fff" />
                                <h4 className="name">{comment.name}</h4>
                            </div>
                            <span className="email">{comment.email}</span>
                            <p className="comment-body">{comment.body}.</p>
                        </C.Comments>
                    ))
                )}
            </C.ContainerComments>
        </C.Container>
    )
}