import React from "react";
import { useDispatch } from "react-redux";
import { addPostLike } from "../actions/post.action";

const Like = ({ post }) => {
	const dispatch = useDispatch();
	const handleLike =()=>{
		const postData = {
			title: post.title,
			author: post.author,
			likes: post.likes + 1,
			id: post.id,
		  };
		  dispatch(addPostLike(postData));
	}
  return (
    <div>
      <img onClick={()=>handleLike()} src="./icons/clap.png" className="clap" alt="clap" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
