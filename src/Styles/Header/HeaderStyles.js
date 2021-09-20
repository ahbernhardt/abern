import styled from 'styled-components'

export const Header = styled.header`
	position: absolute;
	top: 8px;
	display: flex;
	justify-content: space-between;
	padding: 0 0 0 1rem;
	width: 98%;
	height: 65px;
	
	 @media {$media.media_lg} {
        width: 95%;
     }
`;