from enum import Enum


class OperationType(Enum):
    BUY = 0
    SELL = 1

    @classmethod
    def from_string(cls, value: str):
        if value == "BUY":
            return cls.BUY
        elif value == "SELL":
            return cls.SELL
        else:
            return cls.BUY


def operation_type_to_string(operation_type: OperationType) -> str:
    if operation_type == OperationType.BUY:
        return "BUY"
    elif operation_type == OperationType.SELL:
        return "SELL"
    else:
        return "BUY"


class Transaction:
    _amount: int = 0
    _price: float = 0.0
    _commission: float = 0.0
    _timestamp: str = ""
    _operation_type: OperationType = OperationType.BUY

    def __init__(self, amount: int, price: float, commission: float, timestamp: str, operation_type: OperationType):
        self._amount = amount
        self._price = price
        self._commission = commission
        self._timestamp = timestamp
        self._operation_type = operation_type

    @property
    def amount(self) -> int:
        return self._amount

    @property
    def timestamp(self) -> str:
        return self._timestamp

    @property
    def operation_type(self) -> OperationType:
        return self._operation_type

    @classmethod
    def from_json(cls, json_data):
        amount = json_data["amount"]
        price = json_data["price"]
        commission = json_data["commission"]
        timestamp = json_data["timestamp"]
        operation_type = OperationType.from_string(json_data["operation_type"])

        return cls(amount, price, commission, timestamp, operation_type)

    @classmethod
    def dummy(cls):
        return cls(0, 0.0, 0.0, "", OperationType.BUY)

    def to_json(self):
        json_data = {
            "amount": self._amount,
            "price": self._price,
            "commission": self._commission,
            "timestamp": self._timestamp,
            "operation_type": operation_type_to_string(self._operation_type)
        }

        return json_data

    def sum(self) -> float:
        _sum: float = self._price * self._amount
        if self._operation_type == OperationType.BUY:
            _sum = -_sum - self._commission
        else:
            _sum = _sum - self._commission

        return _sum
