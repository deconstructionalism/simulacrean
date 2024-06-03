interface IGridItemProps {
  children?: React.ReactNode;
}

const GridItem = ({ children }: IGridItemProps) => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>{children}</div>
  )
}

export default GridItem