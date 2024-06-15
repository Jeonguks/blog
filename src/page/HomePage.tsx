import styled from "styled-components";

const HomePage = () => {
  const ProfileWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 100%;
  `;
  const ProfileDiv = styled.div`
    height: 200px;
    width: 80%;
    display: flex;
    align-items: center;
    gap: 30px;
    border-bottom: 1px solid #ccc;
  `;
  const ProfileImg = styled.img`
    height: 120px;
    width: 120px;
    border: 1px solid #ccc;
    border-radius: 50%;
  `;
  const TabWrapper = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    font-size: 20px;
    font-weight: 500;
  `;
  const PostWrapper = styled.div`
    padding-top: 50px;
    height: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
  `;
  const NewPost = styled.div`
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    height: 200px;
  `;
  const NewPostThumbnail = styled.div`
    width: 140px;
    height: 80%;
    border: 1px solid #ccc;
    margin-inline: 10px;
  `;
  const NewPostDescribe = styled.div`
    width: 80%;
    height: 80%;
    margin: 10px;
    border: 1px solid #ccc; //TODO FIX
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  return (
    <>
      <ProfileWrapper>
        <ProfileDiv>
          <ProfileImg alt={"profileImg"} />
          <div>
            <h1>UUGI</h1>
            <p>코딩하는 공대생</p>
          </div>
        </ProfileDiv>
      </ProfileWrapper>
      <TabWrapper>
        <a href="#">New Post</a>
        <a href="#">About ME</a>
      </TabWrapper>
      <PostWrapper>
        <NewPost>
          <NewPostThumbnail />
          <NewPostDescribe>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quas
              facere similique ad, sint nemo aut placeat totam cum sunt
              aspernatur suscipit praesentium aliquam itaque modi eligendi
              tempore vitae a?
            </p>
          </NewPostDescribe>
        </NewPost>
        <NewPost>
          <NewPostThumbnail />
          <NewPostDescribe>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quas
              facere similique ad, sint nemo aut placeat totam cum sunt
              aspernatur suscipit praesentium aliquam itaque modi eligendi
              tempore vitae a?
            </p>
          </NewPostDescribe>
        </NewPost>
        <NewPost>
          <NewPostThumbnail />
          <NewPostDescribe>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quas
              facere similique ad, sint nemo aut placeat totam cum sunt
              aspernatur suscipit praesentium aliquam itaque modi eligendi
              tempore vitae a?
            </p>
          </NewPostDescribe>
        </NewPost>
      </PostWrapper>
    </>
  );
};
export default HomePage;
