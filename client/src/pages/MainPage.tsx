import { useDispatch, useSelector } from 'react-redux';
import { fetchCarNameList } from '../slice/carNameSlice';

function Test({ carName, startPrice }: any) {
  return (
    <>
      <span>{carName}</span>
      <span>{startPrice}</span>
    </>
  );
}

export function MainPage() {
  const dispatch = useDispatch();
  const carNameList = useSelector((state: any) => state.carName.carNameList);
  const getCarNameList = () => {
    dispatch(fetchCarNameList('승용'));
    console.log(carNameList);
  };

  return (
    <>
      <h1>main page 입니다.</h1>
      <button onClick={getCarNameList} type="button">
        불러오기
      </button>
      {carNameList &&
        carNameList.map((test: any, idx: any) => (
          <div>
            <Test carName={test.carName} startPrice={test.startPrice} />
          </div>
        ))}
    </>
  );
}
