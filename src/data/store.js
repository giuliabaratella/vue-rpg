import { reactive } from 'vue';

export const store = reactive({

    apiUrl: "http://127.0.0.1:8000/api",
    imagePath: "http://127.0.0.1:8000/storage/",
    characters: [],
    types: [],
    items: [],
    charactersLoading: true,
    itemsLoading:true,
    typesLoading:true,
    socialIcons: ['fa-brands fa-twitter', 'fa-brands fa-tiktok', 'fa-brands fa-youtube', 'fa-brands fa-facebook', 'fa-brands fa-instagram', 'fa-brands fa-discord','fa-brands fa-twitch', 'fa-brands fa-facebook-messenger', 'fa-brands fa-whatsapp'],
})