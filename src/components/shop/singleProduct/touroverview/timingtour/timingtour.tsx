export default function TimingTour() {
  return (
    <div className="!border-b-1 !border-b-gray-300 mb-4 pb-6">
      <h1 className="!text-xl !font-bold">زمان بندی</h1>
      <div className="grid grid-cols-3 justify-center items-center mt-4 text-sm">
        <div className="flex  items-center !border-r !border-transparent p-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
              className="ml-2 text-lightGray200"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M13.627 3.038 3.203 6.273C.73 7.04.693 10.528 3.15 11.347l2.864.954c.796.265 1.42.89 1.686 1.686l.954 2.863c.82 2.457 4.302 2.416 5.074-.053l3.235-10.424c.636-2.05-1.285-3.971-3.336-3.335"
              ></path>
            </svg>
          </div>
          <div>
            <p>تاریخ رفت :</p>
            <p>تاریخ رفت :</p>
          </div>
        </div>
        <div className="flex items-center !border-r !border-gray-400 p-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
              className="ml-2 text-lightGray200"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m6.37 16.965 10.424-3.235c2.474-.766 2.51-4.255.053-5.074l-2.864-.954a2.67 2.67 0 0 1-1.685-1.686l-.955-2.863c-.82-2.458-4.302-2.416-5.074.053L3.034 13.63C2.398 15.68 4.32 17.6 6.37 16.965"
              ></path>
            </svg>
          </div>
          <div>
            <p>تاریخ برگشت:</p>
            <p>زمان برگشت :</p>
          </div>
        </div>
        <div className="!border-r !border-gray-400 p-4">
          <p>زمان تقریبی رسیدن به تهران :</p>
        </div>
      </div>
    </div>
  );
}
