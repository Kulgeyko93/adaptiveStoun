import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  InputGroup,
  FormControl,
  Container,
  Row,
  Button,
} from "react-bootstrap";
import { post_actions } from "./../../store/actions";
import "./post.scss";

type Inputs = {
  title: string;
  post: string;
};

const Post = ({ dispatch }: any): JSX.Element => {
  const [valueTitle, setValueTitle] = useState<string>("");
  const [valuePost, setValuePost] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleAddListItem = () => {
    if (errors.title || errors.post) return;
    if (errors)
      dispatch({
        type: post_actions.SET_POST_TITLE,
        title: valueTitle,
        postMessage: valuePost,
      });
    setValueTitle("");
    setValuePost("");
  };

  return (
    <>
      <Container className='post'>
        <Row>
          <InputGroup className='mb-2'>
            <InputGroup.Text id='inputGroup-sizing-default'>
              Title
            </InputGroup.Text>

            <FormControl
              aria-label='Default'
              aria-describedby='inputGroup-sizing-default'
              value={valueTitle}
              {...register("title", { required: true, maxLength: 10 })}
              onChange={(e) => {
                setValueTitle(e.target.value);
              }}
            />
          </InputGroup>
          {errors.title && (
            <h4 className='text-error'>Title isn't {errors.title.type}</h4>
          )}
          {!errors.title && <h4>Enter title</h4>}
        </Row>
        <Row>
          <InputGroup className='mb-3'>
            <InputGroup.Text id='inputGroup-sizing-default'>
              Post
            </InputGroup.Text>
            <FormControl
              aria-label='Default'
              aria-describedby='inputGroup-sizing-default'
              value={valuePost}
              {...register("post", { required: true, maxLength: 40 })}
              onChange={(e) => {
                setValuePost(e.target.value);
              }}
            />
          </InputGroup>
          {errors.post && (
            <h4 className='text-error'>Post isn't {errors.post.type}</h4>
          )}
          {!errors.post && <h4>Enter post</h4>}
        </Row>
        <Row>
          <Button variant='success' onClick={handleSubmit(handleAddListItem)}>
            Create post
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default Post;
