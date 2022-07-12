import styled, {css} from "styled-components";


const TextContainer = styled.div(
	() => css`
		margin: auto;
		width: 320px;
		word-break: break-word;
	`,
);

export default function Text(props) {
	return (
		<TextContainer>
			<p>{props.text}</p>
		</TextContainer>
	);
}