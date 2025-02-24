import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Form.scss";

function Form() {
  // const [name, setName] = useState("");
  // const [comment, setComment] = useState("");
  const [newComment, setNewComment] = useState([]);
  const params = useParams();
  const api_key = "api_key=13273d8d-5377-423f-a5e5-50a3b0904a29";

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submitted!");

    const form = event.target;
    const name = form.name.value;
    const comment = form.comment.value;

    const commentData = { name, comment };

    try {
      const response = await axios.post(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${params.id}/comments?${api_key}`,
        commentData
      );

      setNewComment(response.data);
      console.log("Comment posted successfully!");

      // onCommentSubmit(response.data);
      console.log(response.data);

      form.reset();
      // setName("");
      // setComment("");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name <input type="text" name="name" required />
      </label>
      <label>
        Comment <textarea name="comment" required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
