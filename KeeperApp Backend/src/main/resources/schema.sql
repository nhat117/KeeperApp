create table quiz
(
    quiz_id          serial
        primary key,
    date_of_creation date,
    quiz_name        varchar(255)
);
create table question
(
    question_id      serial
        primary key,
    question_content varchar(255),
    quiz_id          integer
            references quiz
);
create table answer
(
    answer_id      serial
        primary key,
    answer_content varchar(255),
    is_correct     boolean,
    question_id    integer
            references question
);
