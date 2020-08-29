import axios from "axios";

const url = "https://find-skill-api.herokuapp.com";

const postSkill = (data, setAlert) => {
  return axios({
    method: "post",
    url: `${url}/users`,
    data,
  })
    .then((response) =>
      setAlert({
        message: `Skill Added. Id is ${response.data._id}. Please make sure you his number, you will need it for changes in details`,
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

const filterSkills = (search, setSkills, setAlert) => {
  return axios({
    method: "get",
    url: `${url}/users${search}`,
  })
    .then(({ data }) => setSkills(data))
    .catch(() =>
      setAlert({ message: "Server error. Please try again later." })
    );
};

const getSkillById = (id, setAlert) => {
  return axios({
    method: "get",
    url: `${url}/users/:${id}`,
  })
    .then((response) => {
      return response;
    })
    .catch((response) => {
      setAlert({ message: `${response.error}` });
    });
};

export { postSkill, listSkills, filterSkills, getSkillById };
