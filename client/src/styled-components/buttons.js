import styled from 'styled-components';

export const DefaultButton = styled.button.attrs((props) => {
  return { type: props.type || 'button' };
})`
  padding: 0.3em;
  font-size: 1rem;
  font-family: 'Sarpanch';
  background: transparent;
  border-radius: 2px;
  cursor: pointer;
  border: 1px solid var(--text-color);
  text-shadow: var(--text-shadow-color);
  color: var(--text-color);
  &:hover {
    color: var(--yellow-color);
    border: 1px var(--yellow-color) solid;
  }
`;

export const SignUpBtn = styled(DefaultButton)`
  margin-top: -1rem;
  width: 8rem;
  height: 2.5rem;
  margin-left: 2rem;
`

export const LoginBtn = styled(DefaultButton)`
  margin-top: 2rem;
  width: 8rem;
  height: 2.5rem;
`

export const CreateEventBtn = styled(DefaultButton)`
width: 8rem;
height: 2.5rem;
margin-top: 1rem;
margin-left: 20rem;
`