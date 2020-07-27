import axios from "axios";

const url = "http://localhost:4000";

const postSkill = (data, setAlert) => {
  return axios({
    method: "post",
    url: `${url}/users`,
    data,
  })
    .then(() =>
      setAlert({
        message: "Skill Added",
        isSuccess: true,
      })
    )
    .catch(() =>
      setAlert({
        message: "Server error. Please try again later.",
        isSuccess: false,
      })
    );
};

export { postSkill };
