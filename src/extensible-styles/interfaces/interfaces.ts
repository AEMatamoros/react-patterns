import { ReactElement } from "react";

export interface iProps {
  product: iProduct;
  children?: ReactElement | ReactElement[]; //Convierte nuestro componente en un HOC(high Order component), children hace referencia a los componentes hijos
  className: string; // Para poder extender los estilos por defecto
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
