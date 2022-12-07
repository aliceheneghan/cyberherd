import styled from 'styled-components';

export const DefaultButton = styled.button.attrs((props) => {
  return { type: props.type || 'button' };
})`
  padding: 0.3em;
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
`

export const LoginBtn = styled(DefaultButton)`
  margin-top: 2rem;
`