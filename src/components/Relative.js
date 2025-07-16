import React from 'react'
const relatives=[
  "uncle Shashi",
  "aunt Avinash",
  "cousin Rahul",
  "cousin Priya",
  "grandfather Ramesh",
  "grandmother Sita",
];

const Relative = () => {
  return (
    <div>
        <h1>Relative list</h1>
        <ul>
            {relatives.map((relative, index) => (
                <li key={index}>{relative}</li>
            ))}
        </ul>
    </div>
  )
}

export default Relative