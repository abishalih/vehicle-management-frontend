import ComponentLayout from "./components/layout"
import ComponentTable from "./components/table"

const App = () => {
  return (
    <ComponentLayout>
      <ComponentTable
        columns={[
          { id: "date", label: "Date" },
          { id: "licensePlate", label: "License Plate" },
          { id: "address", label: "Address" },
          { id: "position", label: "Position" },
        ]}
        dataSource={[
          {
            date: "1-1-2024",
            licensePlate: "B 12345 N",
            address: "Lenteng Agung",
            position: <a href={"https://maps.app.goo.gl/V5XipCY4yf7uC76Z8"} target="_blank">See Map</a>,
          },

        ]}
      />
    </ComponentLayout>
  )
}

export default App