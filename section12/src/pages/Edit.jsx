import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { DiaryDispatchContext } from '../App';

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete } = useContext(DiaryDispatchContext);

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
      <Editor />
    </div>
  );
};

export default Edit;
