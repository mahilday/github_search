import { LinkIcon, MapPinIcon } from "@heroicons/react/20/solid";
import moment from "moment";

const UserCard = ({ userDetails }: { userDetails: any }) => {
  const getFormattedDate = () => {
    const date = moment(userDetails?.created_at).format("DD MMM yyyy");
    return date;
  };
  return (
    <div className="bg-offWhite flex flex-col lg:flex-row w-full dark:bg-secondaryDarkBlue rounded-xl p-10 shadow-sm gap-3">
      <div className="w-5/12">
        <img
          className="rounded-full !w-32 !h-32"
          src={userDetails?.avatar_url}
          alt="Avatar"
        />
      </div>
      <section className="">
        <section className="flex flex-col gap-3">
          <div className="flex flex-col xl:flex-row gap-2 xl:items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold dark:text-white">
                {userDetails?.name}
              </h2>
              <h4 className="text-gitBlue">@{userDetails?.login}</h4>
            </div>
            <p className="text-greyBlue dark:text-white text-xs">
              Joined {getFormattedDate()}
            </p>
          </div>
          <div className="text-darkBlue dark:text-white">
            <p>{userDetails?.bio}</p>
          </div>
          <div className="bg-lightGrey flex justify-between dark:text-white dark:bg-gitDark p-5 rounded-lg">
            <div>
              <h5>Repos</h5>
              <p className="text-xl font-semibold">
                {userDetails?.public_repos}
              </p>
            </div>
            <div>
              <h5>Followers</h5>
              <p className="text-xl font-semibold">{userDetails?.followers}</p>
            </div>
            <div>
              <h5>Following</h5>
              <p className="text-xl font-semibold">{userDetails?.following}</p>
            </div>
          </div>
        </section>
        <section className="w-10/12 grid my-10 gap-2 lg:gap-4">
          <article className="flex flex-col gap-2 lg:gap-0 lg:flex-row dark:text-white justify-between">
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5" />
              <span>{userDetails?.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 2.79875C19.2562 3.125 18.4637 3.34125 17.6375 3.44625C18.4875 2.93875 19.1362 2.14125 19.4412 1.18C18.6487 1.6525 17.7737 1.98625 16.8412 2.1725C16.0887 1.37125 15.0162 0.875 13.8462 0.875C11.5762 0.875 9.74874 2.7175 9.74874 4.97625C9.74874 5.30125 9.77624 5.61375 9.84374 5.91124C6.43499 5.745 3.41875 4.11125 1.3925 1.6225C1.03875 2.23625 0.831249 2.93875 0.831249 3.695C0.831249 5.115 1.5625 6.37374 2.6525 7.10249C1.99375 7.08999 1.3475 6.89874 0.799999 6.59749C0.799999 6.60999 0.799999 6.62624 0.799999 6.64249C0.799999 8.63499 2.22125 10.29 4.085 10.6712C3.75125 10.7625 3.3875 10.8062 3.01 10.8062C2.7475 10.8062 2.4825 10.7912 2.23375 10.7362C2.765 12.36 4.2725 13.5537 6.06499 13.5925C4.67 14.6837 2.89875 15.3412 0.981249 15.3412C0.644999 15.3412 0.3225 15.3262 0 15.285C1.81625 16.4562 3.96875 17.125 6.28999 17.125C13.835 17.125 17.96 10.875 17.96 5.4575C17.96 5.27625 17.9537 5.10125 17.945 4.9275C18.7587 4.35 19.4425 3.62875 20 2.79875Z"
                  fill="#4B6A9B"
                />
              </svg>

              <span>{userDetails?.twitter_username}</span>
            </div>
          </article>
          <article className="flex flex-col gap-2 lg:gap-0 lg:flex-row dark:text-white justify-between">
            <div className="flex items-center gap-2">
              <LinkIcon className="h-5 w-5" />
              <span><a href={userDetails?.blog}>{userDetails?.blog}</a></span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.8583 1.55832L1.7 0.16665C1.275 0.0999838 0.841666 0.21665 0.516666 0.49165C0.191666 0.774983 0 1.18332 0 1.60832V19.1666C0 19.625 0.375 20 0.833333 20H3.54166V15.625C3.54166 14.8166 4.19166 14.1666 5 14.1666H7.08333C7.89166 14.1666 8.54166 14.8166 8.54166 15.625V20H12.0833V2.99998C12.0833 2.28331 11.5667 1.67498 10.8583 1.55832ZM4.58333 12.2916H3.33333C2.98833 12.2916 2.70833 12.0116 2.70833 11.6666C2.70833 11.3216 2.98833 11.0416 3.33333 11.0416H4.58333C4.92833 11.0416 5.20833 11.3216 5.20833 11.6666C5.20833 12.0116 4.92833 12.2916 4.58333 12.2916ZM3.33333 9.79164H4.58333C4.92833 9.79164 5.20833 9.51164 5.20833 9.16664C5.20833 8.82164 4.92833 8.54164 4.58333 8.54164H3.33333C2.98833 8.54164 2.70833 8.82164 2.70833 9.16664C2.70833 9.51164 2.98833 9.79164 3.33333 9.79164ZM4.58333 7.29164H3.33333C2.98833 7.29164 2.70833 7.01164 2.70833 6.66664C2.70833 6.32164 2.98833 6.04164 3.33333 6.04164H4.58333C4.92833 6.04164 5.20833 6.32164 5.20833 6.66664C5.20833 7.01164 4.92833 7.29164 4.58333 7.29164ZM3.33333 4.79165H4.58333C4.92833 4.79165 5.20833 4.51165 5.20833 4.16665C5.20833 3.82165 4.92833 3.54165 4.58333 3.54165H3.33333C2.98833 3.54165 2.70833 3.82165 2.70833 4.16665C2.70833 4.51165 2.98833 4.79165 3.33333 4.79165ZM8.74999 12.2916H7.49999C7.15499 12.2916 6.87499 12.0116 6.87499 11.6666C6.87499 11.3216 7.15499 11.0416 7.49999 11.0416H8.74999C9.09499 11.0416 9.37499 11.3216 9.37499 11.6666C9.37499 12.0116 9.09499 12.2916 8.74999 12.2916ZM7.49999 9.79164H8.74999C9.09499 9.79164 9.37499 9.51164 9.37499 9.16664C9.37499 8.82164 9.09499 8.54164 8.74999 8.54164H7.49999C7.15499 8.54164 6.87499 8.82164 6.87499 9.16664C6.87499 9.51164 7.15499 9.79164 7.49999 9.79164ZM8.74999 7.29164H7.49999C7.15499 7.29164 6.87499 7.01164 6.87499 6.66664C6.87499 6.32164 7.15499 6.04164 7.49999 6.04164H8.74999C9.09499 6.04164 9.37499 6.32164 9.37499 6.66664C9.37499 7.01164 9.09499 7.29164 8.74999 7.29164ZM7.49999 4.79165H8.74999C9.09499 4.79165 9.37499 4.51165 9.37499 4.16665C9.37499 3.82165 9.09499 3.54165 8.74999 3.54165H7.49999C7.15499 3.54165 6.87499 3.82165 6.87499 4.16665C6.87499 4.51165 7.15499 4.79165 7.49999 4.79165Z"
                  fill="#4B6A9B"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.9166 7.79248L18.85 9.03498C19.5308 9.18581 20 9.77165 20 10.46V18.5416C20 19.3458 19.3458 20 18.5416 20H12.9166V7.79248ZM15.625 17.5H16.875C17.22 17.5 17.5 17.22 17.5 16.875C17.5 16.53 17.22 16.25 16.875 16.25H15.625C15.28 16.25 15 16.53 15 16.875C15 17.22 15.28 17.5 15.625 17.5ZM16.875 15H15.625C15.28 15 15 14.72 15 14.375C15 14.03 15.28 13.75 15.625 13.75H16.875C17.22 13.75 17.5 14.03 17.5 14.375C17.5 14.72 17.22 15 16.875 15ZM15.625 12.5H16.875C17.22 12.5 17.5 12.22 17.5 11.875C17.5 11.53 17.22 11.25 16.875 11.25H15.625C15.28 11.25 15 11.53 15 11.875C15 12.22 15.28 12.5 15.625 12.5Z"
                  fill="#4B6A9B"
                />
              </svg>

              <span>@{userDetails?.login}</span>
            </div>
          </article>
        </section>
      </section>
    </div>
  );
};

export default UserCard;
