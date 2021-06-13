interface IInputForm {
  name: string,
  value: string,
  width: string
}

export const inputsArr: IInputForm[] = [
  {
    name: 'Street',
    value: 'SE1 6DR, 42 Newington Causeway...',
    width: '100%'
  },
  {
    name: 'Flat',
    value: '133',
    width: '32%'
  },
  {
    name: 'Floor',
    value: '',
    width: '32%'
  },
  {
    name: 'Block',
    value: '',
    width: '32%'
  }
]