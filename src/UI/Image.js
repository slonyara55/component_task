import styled, {css} from "styled-components";


const Image = styled.div(
	() => css`
		width: 320px;
		height: 100px;
		display: inherit;
	`,
);

const Content = styled.img(
	(src) => css`
		padding: 10px;
    width: 100%;
    height: 100%;
    object-fit: contain;
	`,
);

export default function Text(props) {
	return (
		<Image>
			<Content src={props.src} alt=''/>
		</Image>
	);
}