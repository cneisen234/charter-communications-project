import { mockdata } from "../TestData/mockdata";
import { useState } from "react";

function RewardData() {
    const [date] = useState(new Date())
    const calculateReward = (amount) => {
         if(amount > 100) {
            const amountOver = amount - 100
            const amountBetween = 50 //always going to be 50 for amounts over 100
            const doubleRewards = amountOver * 2
            return amountBetween + doubleRewards
         } else if(amount >= 50 && amount <= 100) {
            const amountBetween = amount - 50;
            return amountBetween
         } else {
            return "no reward points"
         }
    }
  return (
    <table>
      <thead>
        <tr>
          <th>Sale Date</th>
          <th>Amount</th>
          <th>Rewards</th>
        </tr>
      </thead>
      <tbody>
        {mockdata.map((d, i) => {
          return (
            d.date >= date.setMonth(date.getMonth() - 3) &&
            <tr key={i}>
              <td>{String(d.date)}</td>
              <td>{d.amount}</td>
              <td>{calculateReward(d.amount)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default RewardData;
