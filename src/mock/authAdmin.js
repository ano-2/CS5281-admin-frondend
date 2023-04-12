/**
 * Created by lk on 18/4/28.
 */

const index = {
    admin_list: {
        total: 1,
        per_page: 20,
        current_page: "1",
        last_page: 1,
        data: [
            {
                id: 1,
                username: "admin",
                avatar: null,
                tel: "admin",
                email: " @gmail.com",
                status: 1,
                last_login_ip: "127.0.0.1",
                last_login_time: 1681133488,
                create_time: 1487868050,
                roles: []
            },
            {
                id: 2,
                username: "Weihang QIN",
                avatar: null,
                tel: "admin",
                email: "Weihang QIN@cityu.com",
                status: 1,
                last_login_ip: "127.0.0.1",
                last_login_time: 1681093488,
                create_time: 1693103488,
                roles: []
            },
            {
                id: 3,
                username: "Boan YU",
                avatar: null,
                tel: "admin",
                email: "Boan YU@cityu.com",
                status: 1,
                last_login_ip: "127.0.0.1",
                last_login_time: 1681103488,
                create_time: 1693103488,
                roles: []
            },
            {
                id: 4,
                username: "Tiffany Hoi-jun LAl",
                avatar: null,
                tel: "admin",
                email: "Tiffany Hoi-jun LAl@cityu.com",
                status: 1,
                last_login_ip: "127.0.0.1",
                last_login_time: 1680909488,
                create_time: 1693103488,
                roles: []
            },
            {
                id: 5,
                username: "Chun Pang AU",
                avatar: null,
                tel: "admin",
                email: "Chun Pang AU@cityu.com",
                status: 1,
                last_login_ip: "127.0.0.1",
                last_login_time: 1681103488,
                create_time: 1693103488,
                roles: []
            },
            {
                id: 6,
                username: "Shiyao SONG",
                avatar: null,
                tel: "admin",
                email: "Shiyao SONG@cityu.com",
                status: 1,
                last_login_ip: "127.0.0.1",
                last_login_time: 1681203488,
                create_time: 1693103488,
                roles: []
            },
            {
                id: 7,
                username: "Teng WANG",
                avatar: null,
                tel: "admin",
                email: "Teng WANG@cityu.com",
                status: 1,
                last_login_ip: "127.0.0.1",
                last_login_time: 1680999488,
                create_time: 1693103488,
                roles: []
            }
        ]
    },
    role_list: [
        {
            id: 1,
            name: "超级管理员"
        }
    ]
};

const save = {
    id: "2",
    username: "test",
    password: "",
    status: "1",
    roles: [1]
};

const edit = "success";

const del = "success";

export default {
    index,
    save,
    edit,
    del
};
