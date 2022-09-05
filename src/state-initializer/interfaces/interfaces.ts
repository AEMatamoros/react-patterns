import { ReactElement } from "react";

export interface iProps {
  product: iProduct;
  // children?: ReactElement | ReactElement[]; //Convierte nuestro componente en un HOC(high Order component), children hace referencia a los componentes hijos
  children?: (handleReset?: () => void, maxRaised?: boolean) => JSX.Element;
  className?: string; // Para poder extender los estilos por defecto
  style?: React.CSSProperties;
  onChange?: (args: iOnChangeArgs) => void;
  value?: number;
  initialValues?: iinitialValues;
}

export interface iinitialValues {
  count?: number;
  maxCount?: number;
}

export interface iProduct {
  id: number;
  title: string;
  img?: string;
}

export interface iProductProvider {
  product: iProduct;
  counter: number;
  handleCounterValue: (value: number) => void;
}

export interface iOnChangeArgs {
  product: iProduct;
  count: number;
}
