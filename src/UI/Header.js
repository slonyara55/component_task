import styled, {css} from "styled-components";

const HeaderContainer = styled.div(
	() => css`
		margin: auto;
		padding: 10px;

	`,
);


function Header(props) {

	return (
		<HeaderContainer>
			<h1>{truncate(props.title)}</h1>
		</HeaderContainer>
	);
}


const truncate = (header) =>
	header?.length >  12 ? `${header.substring(0, 12)}...` : header;


export default Header;
