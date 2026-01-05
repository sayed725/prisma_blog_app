
const createComment = async(Payload:{
  content: string;
  authorId: string;
  postId: string;
  parentId?: string
}) =>{
     console.log(Payload)
}

export const commentService = {
    createComment
}