import styled, { css } from 'styled-components';

export const DefaultNavbar = styled.section`
  .navbar {
    /* border: red 2px solid; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-top: 4em;
    width: 66em;
    height: 3em;
    font-size: 1.5rem;
    text-shadow: 0 0 0.2em black, 0 0 1em black;
    /* border: 3px purple solid; */
    .get-yourself {
      width: 10em;
    }
    .back-to-calendar-and-create-event {
      /* border: 3px red solid; */
      width: 21em;
      display: flex;
      justify-content: space-between;
      .back-to {
        /* border: 3px violet dotted; */
        /* width: 11em; */
        display: flex;
        .arrow-left {
          font-size: 2rem;
          font-weight: bold;
          margin-right: .15em;
          margin-top: .05em;
        }
      }
      .create-an-event {
        /* width: 10em; */
        /* border: blue 2px solid; */
      }
    }

    .get-yourself,
    .sign-up,
    .login,
    .back-to,
    .log-out,
    .create-an-event {
      text-decoration: none;
      color: white;
      /* border: blue 2px solid; */
    }
    ${({ noSearchBar }) => {
      return noSearchBar
        ? css`
            .search-bar {
              display: none;
            }
          `
        : css`
            .search-bar {
              display: flex;
            }
          `;
    }}

    .profile-photo-and-logout-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
      /* border: 5px red dotted; */
      width: 11em;
      padding-left: 1em;
      /* height: 5rem; */
      .display-none {
        display: none;
      }
      .upload-profile-photo-containers-hover-container {
        /* border: 2px dotted black; */
        display: flex;
        justify-content: center;
        align-items: center;
        /* border: 2px black solid; */
        width: 3.5rem;
        height: 3.5rem;
        /* margin-left: 3em; */
        border-radius: 50%;
        cursor: pointer;
        &:hover {
          background: rgba(60, 60, 60, 0.215);
          /* background-color: rgba(182, 180, 180, 0.425); */
        }
        .upload-profile-photo-container {
          display: flex;
          justify-content: center;
          align-items: center;

          /* border: 2px black solid; */
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 1px 1px 5px black;

          .upload-profile-photo {
            width: 110%;
            object-fit: contain;

            /* max-width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            margin-right: 1rem;
            border: 5px red solid; */
          }
        }
      }
      .log-out {
        /* border: 3px blue dotted; */
        margin-left: -1.5em;
      }
    }
    .sign-up-login-container {
      /* border: 2px solid green; */
      width: 11em;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .sign-up {
        /* margin-right: 2em; */
      }
    }
  }
`;

export const CalendarNavBar = styled(DefaultNavbar)``;
export const EventPageNavBar = styled(DefaultNavbar)``;
export const ResultPageNavBar = styled(DefaultNavbar)`
  /* border: magenta 8px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
