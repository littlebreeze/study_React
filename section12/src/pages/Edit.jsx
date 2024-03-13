import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { DiaryDispatchContext, DiaryStateContext } from '../App';

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();

  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);

  const [curDiaryItem, setCurDiaryItem] = useState({});

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );

    if (!currentDiaryItem) {
      window.alert('해당 일기가 존재하지 않습니다!');
      nav('/', { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [params.id, data]);

  const onClickDelete = () => {
    if (
      window.confirm(
        '일기를 정말 삭제할까요? 다시 복구되지 않습니다.'
      )
    ) {
      onDelete(params.id);
      nav('/', { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm('정말로 수정하시겠습니까?')) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav('/', { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={'일기수정하기'}
        leftChild={
          <Button text={'< 뒤로 가기'} onClick={() => nav(-1)} />
        }
        rightChild={
          <Button
            text={'삭제하기'}
            type={'NEGATIVE'}
            onClick={onClickDelete}
          />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
