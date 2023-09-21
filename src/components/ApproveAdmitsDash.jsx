import { useState, useEffect } from "react";

const AdmitsDash = () => {
  const [users, setUsers] = useState([]);
  const baseUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const getAdmits = async () => {
      let response = await fetch(`${baseUrl}/nonApproved`)
        .then((data) => data.json())
        .then((data) => data);
      setUsers(response);
    };
    getAdmits();
  }, []);

  const rejectAdmit = async (id) => {
    let response = await fetch(`${baseUrl}/rejectAdmit/${id}`)
      .then((data) => data.json())
      .then((data) => data);

    if (response.success) {
      setUsers(users.filter((u) => u._id !== id));
    }
  };

  const approveAdmit = async (id) => {
    let response = await fetch(`${baseUrl}/approveAdmit/${id}`)
      .then((data) => data.json())
      .then((data) => data);
    if (response.error) {
      alert(response.error);
    } else {
      setUsers(users.filter((u, i) => u._id !== id));
    }
  };

  return (
    <>
      <div className="parent">
        <table
          className="admits"
          style={{
            borderSpacing: 1,
            borderCollapse: "inherit",
            width: "fit-content",
            overflowX: "scroll",
          }}
        >
          <tbody>
            <tr>
              <th rowspan="2">
                <span>University</span>
                <div class="applied"></div>
              </th>
              <th rowspan="2">
                <span>Course</span>
                <div class="applied"></div>
              </th>
              <th rowspan="2">
                <span>Decision</span>
                <div class="applied"></div>
              </th>
              <th rowspan="2">
                <span>Intake</span> <div class="applied"></div>
              </th>
              <th colspan="4">GRE</th>
              <th colspan="5">
                {" "}
                <span>IELTS/TOEFL</span>
              </th>
              <th rowspan="2">
                <span>College</span>
                <div class="applied"></div>
              </th>
              <th rowspan="2">
                <span>Major</span>
                <div class="applied"></div>
              </th>
              <th rowspan="2">
                <div class="sortable">
                  <p>CGPA</p>
                </div>
                <div class="applied"></div>
              </th>
              <th rowspan="2">
                <div class="sortable">
                  <p>Work Ex</p>
                </div>
                <div class="applied"></div>
              </th>
              <th rowspan="2">
                <div class="sortable">
                  <p>Papers</p>
                </div>
                <div class="applied"></div>
              </th>
              <th rowSpan="2">
                <span>Approve</span>
              </th>
              <th rowSpan={2}>Reject</th>
            </tr>
            <tr>
              <th rowspan="1">
                <div class="sortable">
                  <p>V</p>
                </div>
                <div class="applied"></div>
              </th>
              <th rowspan="1">
                <div class="sortable">
                  <p>Q</p>
                </div>
                <div class="applied"></div>
              </th>
              <th rowspan="1">
                <div class="sortable">
                  <p>AWA</p>
                </div>
                <div class="applied"></div>
              </th>
              <th rowspan="1">
                <div class="sortable">
                  <p>TOT</p>
                </div>
                <div class="applied"></div>
              </th>
              <th>
                {" "}
                <span>R</span>
                <div class="applied"></div>
              </th>
              <th>
                {" "}
                <span>S</span>
                <div class="applied"></div>
              </th>
              <th>
                {" "}
                <span>L</span>
                <div class="applied"></div>
              </th>
              <th>
                {" "}
                <span>W</span>
                <div class="applied"></div>
              </th>
              <th>
                {" "}
                <span>Total</span>
                <div class="applied"></div>
              </th>
            </tr>
            {users.map((row, i) => {
              return (
                <tr>
                  <td>{row.uni}</td>
                  <td>{row.course}</td>
                  <td>{row.decision}</td>
                  <td>
                    {row.intake} {row.year}
                  </td>
                  <td>{row.gre_ver}</td>
                  <td>{row.gre_qua}</td>
                  <td>{row.gre_awa}</td>
                  <td>{row.gre_tot}</td>
                  <td>{row.eng_rea}</td>
                  <td>{row.eng_spe}</td>
                  <td>{row.eng_lis}</td>
                  <td>{row.eng_wri}</td>
                  <td>{row.eng_tot}</td>
                  <td>{row.clg}</td>
                  <td>{row.major}</td>
                  <td>{row.cgpa}</td>
                  <td>{row.work_exp}</td>
                  <td>{row.papers}</td>
                  <td
                    className="click"
                    onClick={() => {
                      approveAdmit(row._id);
                    }}
                    style={{ width: "5rem", textAlign: "center" }}
                  >
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td
                    onClick={() => {
                      rejectAdmit(row._id);
                    }}
                    className="click"
                    style={{
                      textAlign: "center",
                    }}
                  >
                    X
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdmitsDash;
