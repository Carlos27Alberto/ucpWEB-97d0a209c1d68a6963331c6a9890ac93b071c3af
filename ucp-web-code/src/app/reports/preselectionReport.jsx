import React, { useState } from 'react';
import WebHeader from '../../components/ui/WebHeader/WebHeader';
import './midTerm.css';

export default function PreselectionReport() {
    const [year, setYear] = useState('');
    const [quarter, setQuarter] = useState('');

    const courses = [
        { code: "CS201", sec: "001", name: "Circuitos Eléctricos", cr: 3, shift: "Matutino" },
        { code: "CS202", sec: "001", name: "Programación", cr: 3, shift: "Matutino" },
        { code: "CS203", sec: "001", name: "Cálculo", cr: 3, shift: "Matutino" },
        { code: "CS204", sec: "001", name: "Fisiología", cr: 3, shift: "Vespertino" }
    ];

    const handleGenerateReport = () => {
        if (year && quarter) {
            alert(`Generating report for ${year} - ${quarter}`);
            // Here you would typically make an API call to fetch the report data
        } else {
            alert('Please select both year and quarter');
        }
    };

    return (
        <div className="midterm-report">
            <WebHeader />
            <main>
                <h3>Volante de Preselección</h3>
                <div className="report-controls">
                    <select
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="dropdown"
                    >
                        <option value="">Año</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                    </select>
                    <select
                        value={quarter}
                        onChange={(e) => setQuarter(e.target.value)}
                        className="dropdown"
                    >
                        <option value="">Cuatrimestre</option>
                        <option value="1">ENE-ABR</option>
                        <option value="2">MAY-AGO</option>
                        <option value="3">SEP-DIC</option>
                    </select>
                    <button onClick={handleGenerateReport} className="generate-btn">
                    </button>
                </div>
                <div className="student-info">
                    <p><strong>ID:</strong> 490867</p>
                    <p><strong>Nombre:</strong> Carlos López</p>
                    <p><strong>Carrera:</strong> Ingeniería de Software (IDS)</p>
                </div>
                <table className="courses-table">
                    <thead>
                        <tr>
                            <th>Clave</th>
                            <th>Sec</th>
                            <th>Asignatura</th>
                            <th>CR</th>
                            <th>Tanda</th>
                        </tr>
                    </thead>
                    <tbody>
                        {year === "2024" && quarter === "3" ? courses.map((course, index) => (
                            <tr key={index}>
                                <td>{course.code}</td>
                                <td>{course.sec}</td>
                                <td>{course.name}</td>
                                <td>{course.cr}</td>
                                <td>{course.shift}</td>
                            </tr>
                        )) : null}
                    </tbody>
                </table>
            </main>
        </div>
    );
}
