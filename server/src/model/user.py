from typing import Optional

from ..model.sandboxdata import SandboxData
from ..model.edudata import EduData


class User:
    _name: str = ""
    _surname: str = ""
    _login: str = ""
    _email: str = ""
    _id: str = ""
    _token: str = ""
    _edu_data: Optional[EduData] = None
    _sandbox_data: Optional[SandboxData] = None
    _photo_url: Optional[str] = None

    def __init__(self, name: str, surname: str, login: str, email: str, uid: str, token: str,
                 edu_data: Optional[EduData], sandbox_data: Optional[SandboxData],
                 photo_url: Optional[str]):
        self._name = name
        self._surname = surname
        self._login = login
        self._email = email
        self._id = uid
        self._token = token
        self._edu_data = edu_data
        self._sandbox_data = sandbox_data
        self._photo_url = photo_url

    @classmethod
    def from_json(cls, json_data):
        name = json_data["name"]
        surname = json_data["surname"]
        login = json_data["login"]
        email = json_data["email"]
        uid = json_data["_id"]
        token = json_data["token"]
        edu_data = EduData.from_json(json_data["edu_data"])
        sandbox_data = SandboxData.from_json(json_data["sandbox_data"])
        photo_url = json_data["photo_url"]

        return cls(name, surname, login, email, uid, token,
                   edu_data, sandbox_data, photo_url)

    @classmethod
    def dummy(cls):
        return cls("", "", "", "", "", "", None, None, None)

    def to_json(self):
        json_data = {
            "name": self._name,
            "surname": self._surname,
            "login": self._login,
            "email": self._email,
            "uid": str(self._id),
            "token": self._token,
            "edu_data": self._edu_data.to_json(),
            "sandbox_data": self._sandbox_data.to_json(),
            "photo_url": self._photo_url
        }

        return json_data