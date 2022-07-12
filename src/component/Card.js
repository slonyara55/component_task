import styled, { css } from 'styled-components';
import Date from "../UI/Date";
import Text from "../UI/Text";
import Header from "../UI/Header";
import Image from "../UI/Image"



const Container = styled.div(
	() => css`
    position: relative;
    display: block;
    overflow: hidden;
		margin: 5%;
		border: 1px solid black;
		border-radius: 10px;
		width: 320px;
  `,
);


function Card(props) {
	return (
		<Container>
			<Image src={props.src}/>
			<br></br>
			<Header title={props.title}/>
			<br></br>
			<Text text={props.text}/>
			<br></br>
			<Date />
		</Container>
	);
}

export default Card;
