export interface Question {
  name: string;
  text: string;
  units: string;
  options: string[];
  imageOffset?: number;
  isApproximate?: boolean;
  answer: number;
  serving: {
    label: string;
    pct: number;
  };
  comment: string;
}

export const QUESTIONS: Record<string, Question> = {
  Coke: {
    name: 'Coke',
    text: 'How much * can you drink',
    units: 'milliletres',
    options: ['125ml | ⅓ can', '250ml | ⅔ can', '375ml | 1 can', '500ml | 1⅓ can', '625ml | 1⅔ can'],
    answer: 1,
    serving: {
      label: '375ml | 1 can',
      pct: 50
    },
    comment:
      "Did you know that a can of Coke contains close to 10 teaspoons of sugar? We're warned off sweetened drinks because they're packed with kilojoules, have little (if any) nutritional value and don’t give you a sense of fullness (making it easier to consume more kilojoules than you should)."
  },
  OrangeJuice: {
    name: 'orange juice',
    text: 'How many cups of * can you drink',
    units: 'milliletres',
    options: [
      '83.3ml | ⅓ cup',
      '166.7ml | ⅔ cup',
      '250ml | 1 cup',
      '333.3ml | 1 ⅓ cups',
      '416.7ml | 1 ⅔ cups',
      '500ml | 2 cups',
      '583.3ml | 2 ⅓ cups'
    ],
    answer: 3,
    serving: {
      label: '200ml | 4/5 cup',
      pct: 23.34
    },
    comment:
      "You may think fruit juice is a healthy alternative to soft drinks, because it contains some vitamins and its sugars are the natural sugars contained in fruit. But the World Health Organisation includes juice in its definition of foods containing free sugars. That's in part because it's easy to consume—you can have five or six oranges in your glass of OJ and finish it off in five seconds. But too much juice is also bad for your teeth—both because of the sugars and because it's highly acidic."
  },
  WeetBix: {
    name: 'Weet-Bix',
    text: 'How many * can you eat',
    units: 'grams',
    options: [
      '16.5g | 1 biscuit',
      '33g | 2 biscuits',
      '49.5g | 3 biscuits',
      '66g | 4 biscuits',
      '82.5g | 5 biscuits',
      '99g | 6 biscuits',
      '115.5g | 7 biscuits',
      '132g | 8 biscuits',
      '148.5g | 9 biscuits',
      '165g | 10 biscuits',
      '181.5g | 11 biscuits',
      '198g | 12 biscuits',
      '214.5g | 13 biscuits',
      '231g | 14 biscuits',
      '247.5g | 15 biscuits',
      '264g | 16 biscuits',
      '280.5g | 17 biscuits',
      '297g | 18 biscuits',
      '313.5g | 19 biscuits',
      '330g | 20 biscuits',
      '346.5g | 21 biscuits',
      '363g | 22 biscuits',
      '379.5g | 23 biscuits',
      '396g | 24 biscuits',
      '412.5g | 25 biscuits',
      '429g | 26 biscuits',
      '445.5g | 27 biscuits',
      '462g | 28 biscuits',
      '478.5g | 29 biscuits',
      '495g | 30 biscuits',
      '511.5g | 31 biscuits',
      '528g | 32 biscuits',
      '544.5g | 33 biscuits',
      '561g | 34 biscuits',
      '577.5g | 35 biscuits',
      '594g | 36 biscuits',
      '610.5g | 37 biscuits',
      '627g | 38 biscuits',
      '643.5g | 39 biscuits',
      '660g | 40 biscuits',
      '676.5g | 41 biscuits',
      '693g | 42 biscuits',
      '709.5g | 43 biscuits',
      '726g | 44 biscuits',
      '742.5g | 45 biscuits',
      '759g | 46 biscuits',
      '775.5g | 47 biscuits',
      '792g | 48 biscuits',
      '808.5g | 49 biscuits',
      '825g | 50 biscuits'
    ],
    imageOffset: -48,
    answer: 44,
    serving: {
      label: '33g | 2 biscuits',
      pct: 2.040816327
    },
    comment:
      "You're going to have to eat heaps of Weet-Bix before you reach 6 teaspoons of sugar. So the issue is going to be how much sweetener you add yourself."
  },
  NutriGrain: {
    name: 'Nutri-Grain',
    text: 'How many cups of * can you eat',
    units: 'grams',
    options: [
      '13.3g | ⅓ cup',
      '26.7g | ⅔ cup',
      '40g | 1 cup',
      '53.3g | 1⅓ cups',
      '66.7g | 1⅔ cups',
      '80g | 2 cups',
      '93.3g | 2⅓ cups',
      '106.7g | 2⅔ cups',
      '120g | 3 cups',
      '133.3g | 3⅓ cups',
      '146.7g | 3⅔ cups',
      '160g | 4 cups'
    ],
    answer: 6,
    serving: {
      label: '40g | 1 cup',
      pct: 18.1818182
    },
    comment:
      'While Nutri-Grain recently reformulated its recipe to improve its health star rating (it now gets a four-star rating), one cup still contains close to three teaspoons of added sugars.'
  },
  RaisinToast: {
    name: 'raisin toast',
    text: 'How many pieces of * can you eat',
    units: 'grams',
    options: [
      '32.5g | 1 piece',
      '65g | 2 pieces',
      '97.5g | 3 pieces',
      '130g | 4 pieces',
      '162.5g | 5 pieces',
      '195g | 6 pieces'
    ],
    answer: 3,
    serving: {
      label: '65g | 2 pieces',
      pct: 20
    },
    comment:
      'Figuring out exactly how much added sugar is in raisin bread is difficult. Some of those sugars listed on the label are added, but some are intrinsic sugars in the dried fruit.'
  },
  Yoghurt: {
    name: 'strawberry yoghurt',
    text: 'How many tubs of * can you eat',
    units: 'grams',
    options: [
      '87.5g | ½ tub',
      '175g | 1 tub',
      '262.5g | 1½ tubs',
      '350g | 2 tubs',
      '437.5g | 2½ tubs',
      '525g | 3 tubs'
    ],
    answer: 1,
    isApproximate: true,
    serving: {
      label: '175g | 1 tub',
      pct: 20
    },
    comment:
      "Yoghurt appears to have a lot of sugar, but you can't tell from the label which sugars are added. Like other dairy foods, yoghurt has its own natural sugars (lactose). If you're eating flavoured yoghurt there may be added sugars (sucrose, honey etc…) and if it has added fruit it will also contain fructose. Low-fat yoghurts often have more sugar than full-fat varieties, not just because they may have additional sugar to improve the taste, but because when take the fat out of yoghurt you are left with more lactose."
  },
  Jam: {
    name: 'jam',
    text: 'How many heaped teaspoons of * can you eat',
    units: 'grams',
    options: [
      '7.5g | 1 tsp.',
      '15g | 2 tsp.',
      '22.5g | 3 tsp.',
      '30g | 4 tsp.',
      '37.5g | 5 tsp.',
      '45g | 6 tsp.',
      '52.5g | 7 tsp.',
      '60g | 8 tsp.',
      '67.5g | 9 tsp.',
      '75g | 10 tsp.'
    ],
    answer: 4,
    serving: {
      label: '15g | 2 tsp.',
      pct: 11.1111111
    },
    comment:
      "If you've ever made a batch of jam you will have a sense of how much sugar it contains (it's a lot). Jams also contain the fructose present in the fruit used to make the jam."
  },
  Ketchup: {
    name: 'tomato sauce',
    text: 'How many tablespoons of * can you eat',
    units: 'milliletres',
    options: [
      '15ml | 1 tbsp.',
      '30ml | 2 tbsp.',
      '45ml | 3 tbsp.',
      '60ml | 4 tbsp.',
      '75ml | 5 tbsp.',
      '90ml | 6 tbsp.',
      '105ml | 7 tbsp.',
      '120ml | 8 tbsp.',
      '135ml | 9 tbsp.',
      '150ml | 10 tbsp.'
    ],
    answer: 6,
    isApproximate: true,
    serving: {
      label: '15ml | 1 tbsp.',
      pct: 0
    },
    comment:
      "Tomato sauce contains added sugars as well as the fructose from the tomatoes. For those who drown everything in sauce, it's worth knowing how much it contains."
  },
  BakedBeans: {
    name: 'baked beans',
    text: 'How many cans of * can you eat',
    units: 'grams',
    options: ['147g | ⅓ can', '293g | ⅔ can', '440g | 1 can', '560g | 1⅓ cans', '733g | 1⅔ cans', '880g | 2 cans'],
    answer: 3,
    serving: {
      label: '210g | ½ can',
      pct: 8.5948158
    },
    comment:
      "If you're getting your dinner from a tin, you can do a lot worse than a can of baked beans. But Australia's most popular brand of beans probably contains a good deal more sugar than you may realise."
  },
  Chocolate: {
    name: 'Dairy Milk chocolate',
    text: 'How many pieces of * can you eat',
    units: 'grams',
    options: [
      '7.1g | 1 piece',
      '14.3g | 2 pieces',
      '21.4g | 3 pieces',
      '28.6g | 4 pieces',
      '35.7g | 5 pieces',
      '42.9g | 6 pieces',
      '50g | 1 bar',
      '57.1g | 8 pieces',
      '64.3g | 9 pieces',
      '71.4g | 10 pieces',
      '78.6g | 11 pieces',
      '85.7g | 12 pieces',
      '42.9g | 13 pieces',
      '100g | 2 bars'
    ],
    answer: 5,
    serving: {
      label: '50g | 1 bar',
      pct: 46.1538462
    },
    comment:
      "Chocolate is a treat, not a health food. It probably contains more sugar than you realise, but you're also probably not eating it for breakfast."
  }
};
