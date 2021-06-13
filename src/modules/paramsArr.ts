interface IParams {
  value: number,
  unit: string,
  type: string,
  Ri: number,
  low?: boolean
}

export const params: IParams[] = [
  {
    value: 28,
    type: 'Kkal.',
    unit: '',
    Ri: 4,
    low: true
  },
  {
    value: 1.3,
    unit: 'g',
    type: 'Proteins',
    Ri: 10
  },
  {
    value: 0,
    unit: 'g',
    type: 'Fats',
    Ri: 12
  },
  {
    value: 28,
    unit: '',
    type: 'Carbs',
    Ri: 10
  },
  {
    value: 6.4,
    unit: 'mg',
    type: 'Niacin',
    Ri: 40
  },
  {
    value: 0.8,
    unit: 'g',
    type: 'Vitamin B6',
    Ri: 57
  },
  {
    value: 0,
    unit: 'g',
    type: 'Fats',
    Ri: 12
  },
  {
    value: 28,
    unit: '',
    type: 'Carbs',
    Ri: 10
  },
]