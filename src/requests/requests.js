import axios from "axios";

const url = "https://find-skill-api.herokuapp.com";

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

const listSkills = (setSkills, setAlert) => {
  return axios({
    method: "get",
    url: `${url}/users`,
  })
    .then(({ data }) => setSkills(data))
    .catch(() =>
      setAlert({ message: "Server error. Please try again later." })
    );
};

export { postSkill, listSkills };
