import { Card } from '@twilio-paste/core';
import { TipSelectContainer } from '../containers/TipSelectContainer';
import { MenuItemsContainer} from '../containers/menuItemsContainer';

import { MenuItems } from './MenuItems';
import { NewItemFormContainer } from '../containers/newItemFormContainer';
import { SummaryContainer } from '../containers/summaryContainer';

// const items = [
//   { uuid: 1, name: 'Tofu Roast', price: 14, quantity: 1 },
//   { uuid: 2, name: 'Vegan Ham', price: 12, quantity: 1 }
// ];

const Calculator = () => {
  return (
    <Card>
      <NewItemFormContainer />
      <MenuItemsContainer/>
      <TipSelectContainer />
      <SummaryContainer />
    </Card>
  );
};

export default Calculator;
