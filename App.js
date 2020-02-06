import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import "./styles.css";

export default function App() {
  const subjects = ["Maths", "English", "Shona", "Science", "Accounts"];
  const students = [
    {
      key: "1",
      name: "Frank Yellow",
      age: 12,
      address: "Randburg, 201 Bram Fischer Dr",
      gender: "Male",
      results: [
        {
          name: "Maths",
          mark: 80
        },
        {
          name: "English",
          mark: 45
        },
        {
          name: "Shona",
          mark: 35
        },
        {
          name: "Science",
          mark: 65
        },
        {
          name: "Accounts",
          mark: 75
        }
      ]
    },
    {
      key: "2",
      name: "Vimbai Red",
      age: 13,
      address: "Sandton, 15 Grayston Dr",
      gender: "Female",
      results: [
        {
          name: "Maths",
          mark: 35
        },
        {
          name: "English",
          mark: 75
        },
        {
          name: "Shona",
          mark: 90
        },
        {
          name: "Science",
          mark: 65
        },
        {
          name: "Accounts",
          mark: 55
        }
      ]
    },
    {
      key: "3",
      name: "Tatenda Blue",
      age: 13,
      address: "Fourways, 451 Camdeboo Rd",
      gender: "Male",
      results: [
        {
          name: "Maths",
          mark: 65
        },
        {
          name: "English",
          mark: 55
        },
        {
          name: "Shona",
          mark: 63
        },
        {
          name: "Science",
          mark: 64
        },
        {
          name: "Accounts",
          mark: 68
        }
      ]
    }
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender"
    }
  ];

  return (
    <div className="App">
      <Table columns={columns} dataSource={students} />
    </div>
  );
}
