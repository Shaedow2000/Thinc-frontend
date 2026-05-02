type InputTypes = "text" | "email" | "password";

const input: Function = (
  type: InputTypes,
  name: string,
  placeholder: string,
): string => `
  <input type="${type}" name="${name}" placeholder="${placeholder}" class="input" />
`;
