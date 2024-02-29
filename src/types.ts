export interface SpendingDataType {
    day: string;
    amount: number;
  }
  
  export interface BarChartProps {
    data: SpendingDataType[];
  }