import React from 'react';
import './kalender.css';

const Kalender = ({contentkalender}) =>
<div className="table-responsive tablepengajar">
<table className="table table-striped text-center">
    <thead>
      <tr>
        <th>Kelas</th>
        <th>Tes</th>
        <th>Awal Kelas</th>
        <th>Akhir Kelas</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
    {contentkalender.map(function(contentkalender, index){
      return(
        <tr key={index}>
          <td>
          {contentkalender.kelas}
          <p>{contentkalender.tingkat}</p>
          </td>
          <td>{contentkalender.tes}</td>
          <td>{contentkalender.awal}</td>
          <td>{contentkalender.akhir}</td>
          <td>{contentkalender.status}</td>
        </tr>
      )
    })}
    </tbody>
</table>
</div>
export {Kalender};
