import DealsLayout from './deals-layout'

export default function Televisions() {
  const topDeals = [];

  return (
    <DealsLayout 
      heading='Top Deals on Televisions'
      category='televisions'
      // topDeals={topDeals}
    />
  )
}