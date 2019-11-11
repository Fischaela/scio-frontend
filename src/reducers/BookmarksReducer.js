import {
  CREATE_BOOKMARK_ERROR,
  CREATE_BOOKMARK_IN_PROGRESS,
  CREATE_BOOKMARK_SUCCESS,
  GETTING_BOOKMARKS_ERROR,
  GETTING_BOOKMARKS_IN_PROGRESS,
  GETTING_BOOKMARKS_SUCCESS,
  UPDATE_BOOKMARK_ERROR,
  UPDATE_BOOKMARK_IN_PROGRESS,
  UPDATE_BOOKMARK_SUCCESS,
} from './types'

const defaultStore = {
  bookmarks: null,
  bookmarksState: 'UNDEFINED',
  newBookmarkState: 'UNDEFINED',
}

const reducer = (store = defaultStore, action) => {
  switch (action.type) {
  case 'CREATE_BOOKMARK_REQUEST':
    return { ...store, newBookmarkState: CREATE_BOOKMARK_IN_PROGRESS }
  case 'CREATE_BOOKMARK_SUCCESS':
    return { ...store, newBookmarkState: CREATE_BOOKMARK_SUCCESS }
  case 'CREATE_BOOKMARK_ERROR':
    return { ...store, newBookmarkState: CREATE_BOOKMARK_ERROR }
  case 'GET_BOOKMARKS_REQUEST':
    return { ...store, bookmarksState: GETTING_BOOKMARKS_IN_PROGRESS }
  case 'GET_BOOKMARKS_SUCCESS':
    return { ...store, bookmarksState: GETTING_BOOKMARKS_SUCCESS, bookmarks: action.payload }
  case 'GET_BOOKMARKS_ERROR':
    return { ...store, bookmarksState: GETTING_BOOKMARKS_ERROR }
  case 'UPDATE_BOOKMARK_REQUEST':
    return { ...store, newBookmarkState: UPDATE_BOOKMARK_IN_PROGRESS }
  case 'UPDATE_BOOKMARK_SUCCESS':
    return { ...store, newBookmarkState: UPDATE_BOOKMARK_SUCCESS }
  case 'UPDATE_BOOKMARK_ERROR':
    return { ...store, newBookmarkState: UPDATE_BOOKMARK_ERROR }
  default:
    return { ...store }
  }
}

// Selector functions
export const getTags = (state) => {
  let tags = []
  if (state.Bookmarks && state.Bookmarks.bookmarks && state.Bookmarks.bookmarks.length) {
    for (const bookmark of state.Bookmarks.bookmarks) {
      for (const tag of bookmark.tags) {
        tags.push(tag)
      }
    }
    tags = [...new Set(tags)]
  }
  return(tags)
}

export const getTagsObject = (state) => {
  let tagsArray = []
  let tags = {}
  if (state.Bookmarks && state.Bookmarks.bookmarks && state.Bookmarks.bookmarks.length) {
    for (const bookmark of state.Bookmarks.bookmarks) {
      for (const bookmarkTag of bookmark.tags) {
        tagsArray.push(bookmarkTag)
      }
    }
    for (const tag of tagsArray) {
      if (tags[tag]) {
        tags[tag].count +=1
      } else {
        tags[tag] = {}
        tags[tag].count = 1
        tags[tag].name = tag
      }
    }
  }
  return(tags)
}

export const getTimeStamps = () => {
  const timeStamps = [
    {
      "index": 0,
      "created_at": 1519357807091,
      "bookmarks": [
        {
          "id": "3c6e4e5c-e55f-4149-8cb7-74630bfcb4ef"
        },
        {
          "id": "56b5e791-14dd-4758-8689-8ac6e9d0a383"
        }
      ]
    },
    {
      "index": 1,
      "created_at": 1457974068919,
      "bookmarks": [
        {
          "id": "b226b49b-b695-4831-9d03-ec92e70b7a2b"
        },
        {
          "id": "00cfd0a7-bc04-4d73-a124-2639071a034b"
        },
        {
          "id": "f79c317f-6375-4d97-81fe-f474f4a53730"
        },
        {
          "id": "8e0286fc-e57a-4522-9a31-0aa49dfa2bb7"
        },
        {
          "id": "99a1d476-e005-47db-a4f8-d6bb1db67225"
        }
      ]
    },
    {
      "index": 2,
      "created_at": 1417893992409,
      "bookmarks": [
        {
          "id": "8d09513f-b67a-4e2a-8720-424992c35892"
        },
        {
          "id": "53f63109-84ad-4bdf-b2d1-746d486f8c44"
        },
        {
          "id": "a4b8a725-7b62-4c8d-b3e7-71b132ab79c2"
        },
        {
          "id": "5a1f1b10-5663-4479-8dd6-bacfab99d87b"
        },
        {
          "id": "ae19d2fd-1ee1-469f-a52c-7319e588cf4c"
        },
        {
          "id": "50526e3a-c342-4dcb-8ddb-137913997f8f"
        }
      ]
    },
    {
      "index": 3,
      "created_at": 1526873691636,
      "bookmarks": [
        {
          "id": "c4d658c9-ac3f-4218-b958-30f05e3ef342"
        },
        {
          "id": "0348434e-e08c-4e38-8e8a-8944b49c8989"
        },
        {
          "id": "3ade1212-e8b3-4d86-8f92-4ce7cdff1c6d"
        },
        {
          "id": "2403ebea-cd1c-4b8b-ae09-58b9be4c1c25"
        },
        {
          "id": "6354d7d5-a498-4ea7-bfba-5c693db86cf1"
        },
        {
          "id": "0ff17596-0bd8-4098-9fcb-876d8ee2790e"
        },
        {
          "id": "a2d64883-9353-4785-be40-7f62f6df0bfe"
        },
        {
          "id": "360e6919-3fc5-4bce-8ffe-1d7f45ffdbb0"
        }
      ]
    },
    {
      "index": 4,
      "created_at": 1547943674421,
      "bookmarks": [
        {
          "id": "5b854fa8-695f-4c8c-a950-594a05f74b25"
        },
        {
          "id": "c0714983-79a1-4700-8576-460b76c0e578"
        },
        {
          "id": "eb1d2173-79aa-4588-b632-3428f2d78f4d"
        },
        {
          "id": "a94332cb-a3c9-4665-afd5-f17e4320b633"
        },
        {
          "id": "e6b1c9ce-30ce-43e4-9bcd-7f390fe12eb7"
        },
        {
          "id": "3f99d396-6323-47cf-9f68-54f5243bd0d0"
        }
      ]
    },
    {
      "index": 5,
      "created_at": 1412475996154,
      "bookmarks": [
        {
          "id": "2b6d39a3-a1a7-4bfa-9aad-b4fc853fd135"
        },
        {
          "id": "654374e5-692d-4e17-8935-e6249dc00dcd"
        },
        {
          "id": "a9b537e5-7a75-45cd-b9a5-163e42797184"
        },
        {
          "id": "9cb4e0eb-a24e-4560-99d8-fd7cb0ebceb4"
        },
        {
          "id": "40c8b6da-dea8-4cf2-9071-6606550a54b3"
        },
        {
          "id": "eea56f26-1ef0-4057-bf2a-5aca0ddc9922"
        },
        {
          "id": "0810c3af-de24-4828-b89b-6ab653dbada7"
        }
      ]
    },
    {
      "index": 6,
      "created_at": 1562152710840,
      "bookmarks": [
        {
          "id": "3bff5d11-be32-4a2b-abd4-aa6f8a76c49d"
        },
        {
          "id": "de5d6183-6ba3-4c3b-8377-0aa7341b6ae5"
        },
        {
          "id": "72c09ca1-d299-4bfe-893b-c7ef4ac823d3"
        },
        {
          "id": "4fed158a-f661-418b-b055-538812c9331c"
        },
        {
          "id": "f5bedad6-e91e-4858-9bea-1a41b156f16d"
        },
        {
          "id": "832a11c3-5472-434c-93ce-6c3a4d583f40"
        }
      ]
    },
    {
      "index": 7,
      "created_at": 1545872830001,
      "bookmarks": [
        {
          "id": "edb82b88-eec3-4ef8-8cbe-34455354ae40"
        },
        {
          "id": "38541868-6f66-4815-b039-b13218ee53ca"
        },
        {
          "id": "8038ca20-603b-4704-b608-bdc96a4a30b7"
        },
        {
          "id": "4f37fb87-8a40-4d52-bdf5-58ba5f25b8dd"
        },
        {
          "id": "1d1f2d4e-8065-4991-8244-92cd75dcadec"
        },
        {
          "id": "6e726959-3905-408b-ba19-534c7e3e9450"
        },
        {
          "id": "fbf4da72-06ae-42c9-ab73-7f3035373ec5"
        },
        {
          "id": "9d59f3e2-56b1-4d5c-9ad5-c53e74d1e31f"
        }
      ]
    },
    {
      "index": 8,
      "created_at": 1402292463131,
      "bookmarks": [
        {
          "id": "b1d49395-d476-4e9f-b1c5-420f0ebaa3ac"
        },
        {
          "id": "b994544a-b7cd-45d5-92ac-7b4d4cc2551e"
        },
        {
          "id": "0c950990-e2ac-42e7-bebd-df81d4494e6a"
        },
        {
          "id": "42f0f77c-6783-4602-a4d4-24d8ed0d99fe"
        }
      ]
    },
    {
      "index": 9,
      "created_at": 1542545329302,
      "bookmarks": [
        {
          "id": "e0eefc8a-28fc-420c-9040-253f3fb5876e"
        },
        {
          "id": "c5aed283-1326-4ad6-9d89-afe656f613fe"
        },
        {
          "id": "fdcc21c1-3354-49a5-9649-81b4550855bc"
        },
        {
          "id": "261f60bc-176e-4b10-92a8-f5af0cec312a"
        },
        {
          "id": "d2e7c7c8-f33f-4b9f-9306-86dce6a66ac6"
        },
        {
          "id": "9f9ffc1f-e60c-4991-8af5-a8b1ed5ff09b"
        },
        {
          "id": "ef08961a-3ac9-4b45-99dc-f1712f090145"
        },
        {
          "id": "c97cd298-8585-424c-82eb-c12f891b6b23"
        }
      ]
    },
    {
      "index": 10,
      "created_at": 1430787615392,
      "bookmarks": [
        {
          "id": "38002e68-e109-494b-820d-8f86863002c8"
        },
        {
          "id": "77c2099f-60ad-4886-bb8f-fda45a28140e"
        },
        {
          "id": "2220e785-e406-4b3b-81ae-2a681a0a01d3"
        },
        {
          "id": "b8e7521d-0f4f-4704-820d-132fc2b7ec63"
        },
        {
          "id": "b102ea1f-56c6-4595-8c5a-ec7bac8b8b4a"
        },
        {
          "id": "d2070b28-6e5f-48df-8318-63eb155e3eb8"
        },
        {
          "id": "569d0b50-62be-4955-bbae-60b86392d354"
        }
      ]
    },
    {
      "index": 11,
      "created_at": 1485407836386,
      "bookmarks": [
        {
          "id": "3ed004f5-9383-4368-8759-aa95e3abcc6d"
        },
        {
          "id": "abca32b5-6875-4fcd-87b1-b4cdabfe88ed"
        },
        {
          "id": "62578165-43d1-4c24-b661-4d82814b15c1"
        },
        {
          "id": "678ae567-d7de-4de1-9a4e-6d54073f1ae9"
        },
        {
          "id": "2cfaab1f-3699-49b9-bd1a-75309c922dd5"
        },
        {
          "id": "bd85ed9e-0d46-441a-96bd-a880243e21c0"
        }
      ]
    },
    {
      "index": 12,
      "created_at": 1429204817907,
      "bookmarks": [
        {
          "id": "12df3fce-5146-4fa9-a8d1-4edb856a837e"
        },
        {
          "id": "baf2c0ee-12de-46c1-b22f-7d466f8b6fe6"
        },
        {
          "id": "54909b23-af67-4833-8aed-0df1b892fa8b"
        },
        {
          "id": "d077ebd1-3e03-41f3-9642-2e5c2944571b"
        },
        {
          "id": "f01fe227-dbf2-4dab-8cdd-4c7e47d7edc4"
        },
        {
          "id": "f3db4a41-33c5-4def-80bb-9471eb4fa216"
        },
        {
          "id": "c26b7224-a537-41b6-bf40-2f227aa367a8"
        },
        {
          "id": "d3606c5d-06af-4d71-9e09-c5153782abc1"
        }
      ]
    },
    {
      "index": 13,
      "created_at": 1489273783593,
      "bookmarks": [
        {
          "id": "1a3b18a7-c9e9-408a-a05e-ecff113a3f8a"
        },
        {
          "id": "104fa768-873a-4261-821a-11be49f1c286"
        },
        {
          "id": "dd36f13f-9afb-43f6-8857-b6da2e111c67"
        },
        {
          "id": "277769fc-22fd-4bd9-859f-6aab6bfe4402"
        },
        {
          "id": "ccd0b2fe-0a2a-40d4-981d-18ae15bcbed1"
        },
        {
          "id": "0ccc2195-a4f2-40d5-a316-0c818ff15c99"
        },
        {
          "id": "4c561fe8-5845-4354-a7a7-53475b1eedff"
        },
        {
          "id": "f99315a9-9f44-43dc-aed5-16902546e290"
        },
        {
          "id": "49fbd1c8-18d6-4782-92ab-1b0dc7208dc3"
        },
        {
          "id": "8cae2419-2e1c-4467-9624-2e650fbbdb79"
        }
      ]
    },
    {
      "index": 14,
      "created_at": 1421986352887,
      "bookmarks": [
        {
          "id": "4eb03876-8389-43ec-a4ef-a3d3517be70a"
        },
        {
          "id": "a4140513-8c1d-4e22-ad48-e7fdf38be8f8"
        },
        {
          "id": "52fee493-8194-4d0c-bc39-841a7de584be"
        },
        {
          "id": "7ebf3e18-4e65-4dc6-8163-8950827cc419"
        },
        {
          "id": "07867b00-05d0-4c83-9ed9-cc0b3001fb3b"
        },
        {
          "id": "fc8226d9-2ad4-4217-ab83-562627b8552b"
        },
        {
          "id": "283b0e9c-dfc7-4d17-8205-ccaa99820636"
        },
        {
          "id": "612d9325-cf68-4e61-a009-04c61db98709"
        },
        {
          "id": "d0988dee-b5bd-480b-868d-40e9017895ad"
        },
        {
          "id": "71e9c2df-846f-4014-a964-ce1b001c801e"
        }
      ]
    },
    {
      "index": 15,
      "created_at": 1465010040674,
      "bookmarks": [
        {
          "id": "90f279a2-961f-49b9-9c54-6ecafd8e5951"
        },
        {
          "id": "09bfdd2c-b83d-4e63-9752-c6ad1adcae74"
        },
        {
          "id": "3cb9cb09-5ad0-43d1-a884-e80b882df406"
        },
        {
          "id": "f76f8d80-e05e-4ac6-982a-0197db0ede02"
        },
        {
          "id": "88b87899-ef1a-480b-8839-0ef3d9402225"
        }
      ]
    },
    {
      "index": 16,
      "created_at": 1431295931914,
      "bookmarks": [
        {
          "id": "6d735255-f459-4275-9cea-caedd1e549c3"
        },
        {
          "id": "3f6ef837-6329-4b12-ab84-ba63768f833a"
        },
        {
          "id": "c72e7566-9edb-4173-adc9-f4e68735bf80"
        },
        {
          "id": "8c1d5289-20ce-432c-af14-66f9a045855c"
        },
        {
          "id": "87aef04c-c7f9-4ddb-b3e4-c2c33e8995b0"
        },
        {
          "id": "dc631b10-7ad2-4af9-9390-308f4525c7b0"
        },
        {
          "id": "ca65095e-f2a3-480d-9d3d-7439fa9cdef3"
        },
        {
          "id": "716c3de3-744a-4d5a-a912-62025f96f560"
        },
        {
          "id": "52e59e15-a72d-4c9b-9967-3e78cf62442f"
        },
        {
          "id": "e91c2307-75a5-4859-a5d4-a9a2baf696ae"
        }
      ]
    },
    {
      "index": 17,
      "created_at": 1572926575519,
      "bookmarks": [
        {
          "id": "f480a205-563b-4c1a-a413-b494bad3f120"
        },
        {
          "id": "13213cae-ed19-449c-9d2f-fefe42bf8f55"
        },
        {
          "id": "67062ea7-dc66-419f-9867-ff3df6019779"
        },
        {
          "id": "ffd972a9-a68b-480c-8dc9-57e9dbaaa904"
        }
      ]
    },
    {
      "index": 18,
      "created_at": 1411452194413,
      "bookmarks": [
        {
          "id": "eef7613b-0523-4775-94c1-72ae9ec2ce17"
        }
      ]
    },
    {
      "index": 19,
      "created_at": 1495783195727,
      "bookmarks": [
        {
          "id": "ee3664ff-ae83-4c62-b5ea-cc92aa5e6da2"
        },
        {
          "id": "91f41601-15d3-41b1-a8c1-ffecc17a7cee"
        },
        {
          "id": "ddfec2f2-1ea1-4d12-9ad2-ad2eba4258ea"
        },
        {
          "id": "9fef5baa-a478-476b-af1e-056a3d9299ea"
        },
        {
          "id": "6c5d5c3b-628c-44b6-b669-080d993e61bd"
        },
        {
          "id": "9d5f9d99-b0af-4f9e-8c69-c18e79b24085"
        },
        {
          "id": "2d1916a9-1b88-408a-af6a-c9601f19d5a7"
        },
        {
          "id": "0c0c7f00-abb2-4628-a4d2-4ee7d261495d"
        },
        {
          "id": "2b533400-ac5c-44ec-a39b-622536f9ead5"
        },
        {
          "id": "75babf45-4dc2-438c-9707-98f23d27fe90"
        }
      ]
    },
    {
      "index": 20,
      "created_at": 1398593766527,
      "bookmarks": [
        {
          "id": "b5ec9fa6-ba1e-400c-abf6-c8fb99f5841a"
        },
        {
          "id": "4f3c9629-e1ac-40f3-9a65-b61149eb4793"
        }
      ]
    },
    {
      "index": 21,
      "created_at": 1398259082802,
      "bookmarks": [
        {
          "id": "27c81be5-2421-496c-8d85-c09505071d4b"
        },
        {
          "id": "79df3877-98d4-49bb-bb25-8da4396df6f8"
        },
        {
          "id": "391ea94e-145e-4d9a-a6f8-3e003e89174c"
        },
        {
          "id": "b3922e14-87e7-4c6b-b2a5-b55905f51ea2"
        },
        {
          "id": "3e9728c4-1670-46e5-aa2a-524093a7f3f6"
        },
        {
          "id": "95d8352f-4fa1-4bff-a727-8047f3297dbd"
        },
        {
          "id": "de6c43a4-3866-41d9-8bff-9703d39104b8"
        },
        {
          "id": "09606c60-3b5b-4e69-af40-4b29b13c9cee"
        }
      ]
    },
    {
      "index": 22,
      "created_at": 1511025457228,
      "bookmarks": [
        {
          "id": "69cc59ff-616f-4b70-8c7e-a2ad9677398b"
        },
        {
          "id": "46f2ebe4-b503-4ad1-b327-8782f0359fad"
        }
      ]
    },
    {
      "index": 23,
      "created_at": 1489543631842,
      "bookmarks": [
        {
          "id": "85996cd4-a41f-43ed-8a56-b5934bcf56d9"
        },
        {
          "id": "acb5f4af-598d-4f7d-ae03-1f6149f3fcbb"
        },
        {
          "id": "67dd5daa-b6db-4617-bc01-8aed7a57a7ac"
        },
        {
          "id": "b018b96f-c78a-4d4c-932e-bf095ce58319"
        },
        {
          "id": "a194c5f2-be67-43a7-af36-5f0fa6398f74"
        },
        {
          "id": "a7bf625c-1d8a-4220-9179-dab0c3d2690b"
        },
        {
          "id": "e6f02c4c-3e8e-4657-a87b-40438a84381d"
        }
      ]
    },
    {
      "index": 24,
      "created_at": 1524164637625,
      "bookmarks": [
        {
          "id": "5f36504a-23cc-4ae8-abce-7fc7bf6cdd7c"
        },
        {
          "id": "1209fa43-aa79-49d1-bc72-eb006060223c"
        },
        {
          "id": "187bca63-3723-4e83-abff-51d22c9839a5"
        }
      ]
    },
    {
      "index": 25,
      "created_at": 1504538085349,
      "bookmarks": [
        {
          "id": "aa00fca7-4cac-4232-99c8-401a7ecbf0bd"
        },
        {
          "id": "d7262f95-bf1d-4777-8ff8-b7b62a585c8f"
        },
        {
          "id": "de28660c-2c49-4961-9299-14e90d65101a"
        },
        {
          "id": "263a70ac-6de9-4678-b5d5-150b67a31ec1"
        },
        {
          "id": "87b053ea-04fe-4c85-8f44-6233f6f9009a"
        },
        {
          "id": "c49f3c4a-a4d3-4912-8121-b67eb2c49cfb"
        },
        {
          "id": "8cd09eaf-982c-4c87-8138-b84702b32d37"
        },
        {
          "id": "5c0c517f-5b94-4822-bbce-6a33ccb8d832"
        },
        {
          "id": "ab65fa2e-bff9-4547-888c-b63bf74f6a59"
        },
        {
          "id": "36ada626-aac6-4c0a-b37b-c0c4905a7e88"
        }
      ]
    },
    {
      "index": 26,
      "created_at": 1550680983471,
      "bookmarks": [
        {
          "id": "88851bdd-d2ec-4399-9b58-76c1b4966392"
        },
        {
          "id": "c0f6217c-b30e-46ff-9bfc-d7538cbfbc8b"
        },
        {
          "id": "791d06b6-ac4c-4076-913a-01372593b652"
        },
        {
          "id": "aa4d08ab-57a6-4faf-a235-b9b8e973c033"
        }
      ]
    },
    {
      "index": 27,
      "created_at": 1556099864442,
      "bookmarks": [
        {
          "id": "8e2ae8c7-3916-4b74-9ce9-27c3ae4a2884"
        },
        {
          "id": "ef366fdc-8264-4969-ae54-07ddbef0d875"
        }
      ]
    },
    {
      "index": 28,
      "created_at": 1572364781628,
      "bookmarks": [
        {
          "id": "98365687-06a8-4362-9dc7-7423824ccf07"
        },
        {
          "id": "e7f60429-41e9-408c-9691-4e05117bab76"
        }
      ]
    },
    {
      "index": 29,
      "created_at": 1457558025368,
      "bookmarks": [
        {
          "id": "9a846be1-0edc-4dee-a87b-3d0da6720fab"
        },
        {
          "id": "4fb460be-d8fe-4af5-9840-2c3182c0d6d4"
        },
        {
          "id": "c0193257-7901-47c6-b283-a8b0c75c4ed6"
        },
        {
          "id": "0f206cba-f3c9-415f-b206-ca7d4739bfda"
        },
        {
          "id": "ae03cb5f-8974-46da-9822-9eeb017c280b"
        },
        {
          "id": "434d7cf8-9d67-4d55-9892-e0985805991d"
        }
      ]
    },
    {
      "index": 30,
      "created_at": 1428594471021,
      "bookmarks": [
        {
          "id": "43af08b7-07dc-4c8a-863d-01be590b063d"
        },
        {
          "id": "96fe4f4f-98ea-4a38-9c66-f8e1d68decc5"
        },
        {
          "id": "af4a3641-adaa-4101-8114-987acb002752"
        },
        {
          "id": "f684e572-ddfc-454b-991d-32732844abde"
        },
        {
          "id": "c4b0a6ff-cdb4-4569-b524-455bab236927"
        },
        {
          "id": "18dfb48e-97b9-4cda-8d21-909e033f70ae"
        },
        {
          "id": "93540d04-ec07-4d81-a304-6ed64dda1b64"
        },
        {
          "id": "882a7903-52e8-4294-841c-c0e70e7ba72d"
        }
      ]
    },
    {
      "index": 31,
      "created_at": 1523819737374,
      "bookmarks": [
        {
          "id": "3afebcdf-41ca-43d8-bbca-fcf12a567fad"
        },
        {
          "id": "9ed39a54-e942-4886-a259-e5dcbd9f0364"
        },
        {
          "id": "33e5ebab-39f6-4f1c-b07c-cfe510b63739"
        },
        {
          "id": "85f837d0-8d63-4aa3-95e5-7ac0a509e3b0"
        }
      ]
    },
    {
      "index": 32,
      "created_at": 1411175301371,
      "bookmarks": [
        {
          "id": "0e71c659-e856-4a57-8f1f-742d14983662"
        },
        {
          "id": "9e376bd7-89ac-4a20-8692-636ab671d7ab"
        },
        {
          "id": "e7a05137-0f25-4d08-a56a-ea93d57eef38"
        },
        {
          "id": "6d6e0f27-8f09-4f49-b3a2-a43e94a9ef9d"
        },
        {
          "id": "e2dbb232-eaf8-4ca9-b3fa-444102e95d47"
        },
        {
          "id": "9bf0a227-8994-429e-821b-c4333edede93"
        },
        {
          "id": "d75216f0-69b1-4b5c-88e3-c65eb55fb0a7"
        },
        {
          "id": "1821d91b-382c-41b2-a2a3-94a248b32d1c"
        },
        {
          "id": "c8da786c-8669-4421-917f-63890dfd7c1f"
        }
      ]
    },
    {
      "index": 33,
      "created_at": 1539774414109,
      "bookmarks": [
        {
          "id": "af2d48e2-b4b2-4429-b197-40f7fd00a6d2"
        },
        {
          "id": "ab77e767-4e4e-4523-99e7-0be33777f98b"
        },
        {
          "id": "cec946ba-61a3-4928-842e-cb1c61becee7"
        },
        {
          "id": "cc20bebe-321e-4756-ae4e-6d3444ebaa5d"
        },
        {
          "id": "8f66cd86-8103-46e7-a874-b3f620492a18"
        },
        {
          "id": "61f50594-b27c-4cd1-8bd9-b9d855a82761"
        },
        {
          "id": "37f4f9f9-13d5-462c-ba04-97da722d9466"
        },
        {
          "id": "ce2555f2-8979-46a1-800c-daf25ba55a4a"
        },
        {
          "id": "e89d5969-819c-4a7f-9044-e0a218a4e9f0"
        }
      ]
    },
    {
      "index": 34,
      "created_at": 1397917438448,
      "bookmarks": [
        {
          "id": "a869aeb8-54d8-444f-8293-f9d74e6e8c4e"
        },
        {
          "id": "87a465dc-e384-4006-9637-9e6125b84992"
        },
        {
          "id": "f0ff65cd-2ece-4778-ab42-515620d82f83"
        },
        {
          "id": "69ad9a64-4080-4da2-8858-b0ee59bf3b90"
        },
        {
          "id": "cd45c8b9-1db8-461a-a754-59375941bfd6"
        },
        {
          "id": "f6a36400-e867-4888-901c-41744752213d"
        },
        {
          "id": "76c4545b-d6fb-4f36-a938-e35766f7f14b"
        }
      ]
    },
    {
      "index": 35,
      "created_at": 1490976385750,
      "bookmarks": [
        {
          "id": "b927b7a1-c765-4434-9833-fd7d67f6182f"
        },
        {
          "id": "c5322630-5535-46e6-babc-2e8c0a5d2b01"
        },
        {
          "id": "293ede3f-8471-4c87-a74d-051f08a19b55"
        },
        {
          "id": "85232329-5287-49f7-a7cd-d43459918eb5"
        },
        {
          "id": "46a47b98-974f-4a04-84b1-531601a33c2e"
        },
        {
          "id": "c2f093f5-40cb-41d7-9121-de8c3a8e6e47"
        },
        {
          "id": "2d6d31c9-4315-4ec0-9fac-a8194be6390f"
        },
        {
          "id": "77c3c24d-2073-4324-9c1b-d5c61cef0311"
        },
        {
          "id": "11696513-3e22-42ba-b684-3bddc54ca84e"
        }
      ]
    },
    {
      "index": 36,
      "created_at": 1517246222521,
      "bookmarks": [
        {
          "id": "6511170b-2a05-4f76-a808-f81c1258f2a2"
        },
        {
          "id": "607a22ed-6a4e-4d11-8a62-8de09a0aec36"
        },
        {
          "id": "e253406b-20b7-4c18-a273-da0892b5b471"
        },
        {
          "id": "0c9f2747-d859-4599-8bdd-60440052f237"
        },
        {
          "id": "99757582-b1f5-4a5a-8439-7b798cabc5eb"
        }
      ]
    },
    {
      "index": 37,
      "created_at": 1505910955686,
      "bookmarks": [
        {
          "id": "facc7105-a7c2-44b7-9dc0-5b9ddeebd6a4"
        },
        {
          "id": "ff0d4b42-09ad-4c35-967a-d58dd7156042"
        },
        {
          "id": "c8afcf7a-6714-465f-89f6-b98415e46650"
        },
        {
          "id": "abef398c-8846-4f65-9d08-6a1dd3a2479f"
        }
      ]
    },
    {
      "index": 38,
      "created_at": 1524323178859,
      "bookmarks": [
        {
          "id": "5b3b0d03-bcc5-4338-8774-30621d298f87"
        },
        {
          "id": "ed9a5ef6-aef6-4296-8c9b-b4f504d67ecb"
        },
        {
          "id": "528b17a5-8b5e-4ea5-91e8-74231c93accd"
        },
        {
          "id": "b04bd247-1284-4fdb-84e4-2420497bf9f8"
        },
        {
          "id": "8068789a-d667-4b22-9488-c6b10588ad8f"
        },
        {
          "id": "19a099d0-f342-422e-8855-158ad19ab484"
        },
        {
          "id": "17c8c1a3-6775-4086-abde-2f32ad0ef83e"
        },
        {
          "id": "03451532-46ca-468a-ab9e-639273377acc"
        },
        {
          "id": "a114da2b-1ada-4ce5-8f35-9c56088c36a8"
        },
        {
          "id": "c1dff9cc-d166-46ea-ad57-28fe70b7112a"
        }
      ]
    },
    {
      "index": 39,
      "created_at": 1523494942052,
      "bookmarks": [
        {
          "id": "33c44137-fd55-497b-8ea8-a86459147470"
        },
        {
          "id": "b32ef856-86b0-4d8d-bda1-315a921c38b2"
        },
        {
          "id": "c103a7a7-12d7-4a72-b5bc-bcf971bb20ff"
        },
        {
          "id": "49d38346-f950-4796-80aa-45a112744c11"
        },
        {
          "id": "c6630fc3-768f-428d-ace2-3426e81b6ad8"
        }
      ]
    },
    {
      "index": 40,
      "created_at": 1508681722310,
      "bookmarks": [
        {
          "id": "9f5a0cdb-ee09-440b-ad28-e3b50e126299"
        },
        {
          "id": "625fc172-5c70-446a-9aae-1bb5a5ad0fef"
        },
        {
          "id": "2ccf322c-7bcd-4a5b-8858-0a8d5e86193b"
        },
        {
          "id": "74dea73b-3e67-496e-889f-28cb09012e49"
        },
        {
          "id": "1f265bdb-04d6-4aa1-a41e-64aa007ba34b"
        },
        {
          "id": "b58ee809-4c58-4398-95ea-6b2038c92b23"
        },
        {
          "id": "e0a27144-6816-45bc-82a8-eb0497e5f812"
        },
        {
          "id": "c248ee56-5d10-42cc-bef7-5a74341b3d8c"
        }
      ]
    },
    {
      "index": 41,
      "created_at": 1447870905415,
      "bookmarks": [
        {
          "id": "af1749a2-98bc-4601-a4d1-0c61867fe915"
        },
        {
          "id": "443844b1-698a-4592-90d3-c95791a834e2"
        },
        {
          "id": "80988c7b-3520-4819-b477-e256f39db7cd"
        },
        {
          "id": "e2759187-f0f1-44bd-b76c-c0d6306c03f0"
        },
        {
          "id": "ef073cba-707c-402e-9fb3-c47ef503d0fb"
        }
      ]
    },
    {
      "index": 42,
      "created_at": 1523912995907,
      "bookmarks": [
        {
          "id": "cc293c79-7c0e-499d-905c-02dcbd2601ae"
        },
        {
          "id": "4721ddcb-a90a-450b-9fd7-fb16a8c56696"
        },
        {
          "id": "abee0a69-b405-48bb-a524-abc78da40705"
        },
        {
          "id": "e4f0a0d9-0c54-44fd-9523-0fcc4229243e"
        },
        {
          "id": "b36382e2-e612-44ca-950f-8c483fdf5b43"
        },
        {
          "id": "302fd71d-1857-459e-b79a-369c796fb240"
        },
        {
          "id": "e7d64c0c-4dc8-49e5-8334-c76fc2e11ac5"
        },
        {
          "id": "1378a540-b5c3-49b5-93f6-7a07ca64b41a"
        },
        {
          "id": "2ee91d3b-16a2-49df-9dff-b7e12b1b0e7c"
        }
      ]
    },
    {
      "index": 43,
      "created_at": 1418370689456,
      "bookmarks": [
        {
          "id": "f0aaca7e-1f9f-4e70-a8b9-a125debab585"
        },
        {
          "id": "5edeb4c8-6e16-40ae-aa26-58185113b705"
        },
        {
          "id": "a658d2bb-ef2a-4b45-bbb5-825f6de654e3"
        },
        {
          "id": "5b6b84ce-af7c-4e7a-8017-60ac30bb71a0"
        },
        {
          "id": "4ebdf0f9-29c0-49a6-93c4-91c7c8e861b4"
        },
        {
          "id": "46fa885f-3901-463e-85bb-92d1957ee936"
        },
        {
          "id": "60257ed5-6cbf-46b7-9fc3-fe0d68b79166"
        },
        {
          "id": "53dee458-a1b3-451b-9206-95bb768a074a"
        },
        {
          "id": "ed080a68-97b8-47d6-85c8-c09cddb3be99"
        },
        {
          "id": "3633e524-e16d-4da5-ac7b-5441d72eb86e"
        }
      ]
    },
    {
      "index": 44,
      "created_at": 1487599623726,
      "bookmarks": [
        {
          "id": "770e468d-fef0-4919-87e7-aadd3806082c"
        },
        {
          "id": "f8cdd11d-6b1b-4b30-9093-d3a628950c4d"
        },
        {
          "id": "2ce756c5-8aa6-42ce-8e9e-42d8fdf4c93e"
        },
        {
          "id": "6823d25c-3739-41aa-8ffa-b28b1e890bb9"
        },
        {
          "id": "b40cbbf8-c506-4ce4-978a-27630945003c"
        },
        {
          "id": "377e9285-9815-4200-a5e3-40f12cb46a3e"
        },
        {
          "id": "101aa027-042c-488f-ac21-3594c67a023d"
        },
        {
          "id": "71e38b95-7553-407b-8a2f-3c15b07fc12b"
        }
      ]
    },
    {
      "index": 45,
      "created_at": 1454792211515,
      "bookmarks": [
        {
          "id": "9f60831d-e2c6-4f4c-9e83-5b24228db887"
        },
        {
          "id": "22d5e816-d3f3-41cd-8541-49fdc45b33ff"
        },
        {
          "id": "ddeb0377-9857-4c92-b9b4-8a961bd70d31"
        },
        {
          "id": "3ca6d637-42ff-4d58-bc6e-bcd015aefbd2"
        },
        {
          "id": "b21b4688-5602-417b-bf9e-085469038bfe"
        }
      ]
    },
    {
      "index": 46,
      "created_at": 1497306832606,
      "bookmarks": [
        {
          "id": "0c0fb158-b18e-42c1-b5b8-cbf4c9043082"
        },
        {
          "id": "9755a483-9f36-46fd-8b2c-11edbc29f10f"
        },
        {
          "id": "a6564ef9-6c56-45bb-8c1c-97e293c6a507"
        },
        {
          "id": "fc270186-5c6c-4c63-9495-59e877487e97"
        },
        {
          "id": "04f5102b-7ceb-4b97-a74a-729567f5cbad"
        },
        {
          "id": "f72c34b4-a96b-47e5-a69c-216ca488d033"
        }
      ]
    },
    {
      "index": 47,
      "created_at": 1492613534398,
      "bookmarks": [
        {
          "id": "851d4fb2-80c7-435c-8c33-05f90d3e3d75"
        },
        {
          "id": "d45dc6c4-68c8-47ab-99d4-4b4bb26d378b"
        },
        {
          "id": "ffb27af4-2c11-4521-9d85-efb216942882"
        }
      ]
    },
    {
      "index": 48,
      "created_at": 1571905026963,
      "bookmarks": [
        {
          "id": "373083b4-cce5-47c1-95af-1b0ae189f98b"
        },
        {
          "id": "28318c7e-b2d6-402a-b08f-67a40236805c"
        },
        {
          "id": "ca6a394e-d96b-4023-9920-f484bbd11b23"
        }
      ]
    },
    {
      "index": 49,
      "created_at": 1541348604354,
      "bookmarks": [
        {
          "id": "599e835e-fb5f-4f97-b9d2-e292afd8fe8c"
        },
        {
          "id": "175e0284-cfb5-4448-998c-32aeba9fea81"
        },
        {
          "id": "f59ee76e-e1ad-4687-919b-71daa6d51523"
        },
        {
          "id": "87d4b481-c0d6-40e0-b4a9-34cb0be981b2"
        },
        {
          "id": "880773af-f772-4a6a-bb2c-afdbb12bcccc"
        },
        {
          "id": "c5fa06b9-62c3-48e4-a7aa-d738f397b3ef"
        },
        {
          "id": "94cd6a7f-022b-45c4-93f4-3fe1a90c416a"
        },
        {
          "id": "243e4955-faa8-4ed9-a9d5-44c917ce8931"
        },
        {
          "id": "65525478-4cba-4922-8801-2d26723012d3"
        }
      ]
    },
    {
      "index": 50,
      "created_at": 1473149310444,
      "bookmarks": [
        {
          "id": "7a45db2a-a467-46bb-9978-53ff290c9cd3"
        },
        {
          "id": "1bfc7baa-ecf9-4dbd-b7cc-e75273108010"
        },
        {
          "id": "02817d92-d164-4886-b176-fc0130d3d20f"
        },
        {
          "id": "1b7ca513-bfcb-48d0-b01f-1b8d837d7021"
        }
      ]
    },
    {
      "index": 51,
      "created_at": 1469329863422,
      "bookmarks": [
        {
          "id": "e6220256-a28b-4a47-9304-4c765b067d1c"
        },
        {
          "id": "f2837d5e-9be5-4a3e-8412-365a778c03f7"
        },
        {
          "id": "27bdf42f-19c2-474e-b726-9b77f31f17dd"
        },
        {
          "id": "51a93272-1bf1-4e14-ad9b-bc9e427386f7"
        },
        {
          "id": "5379d478-0fe8-4a4f-8e7b-f56fc77d200d"
        },
        {
          "id": "ef06d498-a0a9-4aa4-83f9-3e2d7dfa97d2"
        },
        {
          "id": "b7968958-38d7-4d34-8323-c5f3beee82c2"
        },
        {
          "id": "aab31c8e-0f78-48b4-b842-3006f79f22ca"
        },
        {
          "id": "75a3e96e-c7a1-41e4-9f1e-8f260f33fd6c"
        },
        {
          "id": "9dd946d8-3a03-431f-b1fb-541300ff0e38"
        }
      ]
    },
    {
      "index": 52,
      "created_at": 1538245251144,
      "bookmarks": [
        {
          "id": "d4aea74d-0ce2-47e3-8563-b2404a6d4308"
        },
        {
          "id": "72b32653-3078-493b-9aad-94d92e685b8d"
        },
        {
          "id": "40dbeea3-86ef-46ed-9b9a-3ec5cf93098c"
        },
        {
          "id": "a8019930-e583-4860-a3ba-b5ceb6c051ea"
        },
        {
          "id": "891a7d52-0eb8-4b37-81fe-253047d7a6c4"
        },
        {
          "id": "ece0d436-88e3-4e2d-965c-e9bb378ae691"
        },
        {
          "id": "929395ec-c054-4648-bc55-452d0bf3aa2f"
        },
        {
          "id": "1adb04ae-d5ca-412a-9861-0d1fa124b551"
        },
        {
          "id": "dfda43c4-52a6-4220-94b4-29085d9f337b"
        }
      ]
    },
    {
      "index": 53,
      "created_at": 1456206023861,
      "bookmarks": [
        {
          "id": "eee02632-27e0-4d3b-8657-b8b66786d1a6"
        },
        {
          "id": "d34ba9f8-25f5-4df4-ac23-2f113a8f462d"
        },
        {
          "id": "c9df23b5-0d15-4887-8e70-b4833114971e"
        },
        {
          "id": "49e17fff-bfff-4e48-b81c-364a7ed25340"
        },
        {
          "id": "088a0648-0d73-41ef-a4f5-55953a6cf97d"
        },
        {
          "id": "4bd506d4-9dba-4ea6-b361-70155d620142"
        },
        {
          "id": "bbee455d-5855-4f7e-a166-78fb8af55f2b"
        },
        {
          "id": "961efefb-bc7c-4984-b2c6-b3a84e6041dc"
        }
      ]
    },
    {
      "index": 54,
      "created_at": 1561132647141,
      "bookmarks": [
        {
          "id": "5e459d62-5a80-401c-ae07-aa2756c816ce"
        }
      ]
    },
    {
      "index": 55,
      "created_at": 1518458102835,
      "bookmarks": [
        {
          "id": "83402338-aef1-4999-b293-4d8f09fa55ac"
        },
        {
          "id": "e9340c71-5639-4723-808e-b4c6ade0ff28"
        },
        {
          "id": "45c44720-8ab1-4353-b3da-e8e29e1e8596"
        },
        {
          "id": "5dd17249-4f8c-4186-92f3-3e3df2bc969b"
        },
        {
          "id": "e4715fe1-7792-4e52-a8d0-9033e5e65c4e"
        },
        {
          "id": "ce397b66-88e3-4429-8cf5-cc200f40fce0"
        },
        {
          "id": "2aebf060-8d32-4863-8ee3-3236e10c8702"
        },
        {
          "id": "0e986769-70f9-49fb-8a90-5afaa0791204"
        }
      ]
    },
    {
      "index": 56,
      "created_at": 1456555737292,
      "bookmarks": [
        {
          "id": "c23a80f2-d190-4c52-8fe1-2d220ed90ac7"
        }
      ]
    },
    {
      "index": 57,
      "created_at": 1440054448871,
      "bookmarks": [
        {
          "id": "d41ec7e6-9ef6-41c6-83ad-d3736cadd3b7"
        }
      ]
    },
    {
      "index": 58,
      "created_at": 1456231048832,
      "bookmarks": [
        {
          "id": "83f29e5d-5eee-4ee9-894f-9aca6be14a1c"
        },
        {
          "id": "bb29d4aa-b37f-44da-b327-a870e04a1e6c"
        },
        {
          "id": "020e984f-86e1-41b7-90c3-855490b677fb"
        },
        {
          "id": "fe76ba50-16bc-4ec9-bc10-95b6494e68de"
        },
        {
          "id": "62b40a75-bb17-42b8-83ec-620f69587be1"
        },
        {
          "id": "c67863f9-fca6-4472-9afa-0f5292592e02"
        },
        {
          "id": "f8e52452-a3db-42cb-abc3-4b3c140be258"
        },
        {
          "id": "6f266dfd-020d-43f1-b202-b641d1672c24"
        },
        {
          "id": "19892e5d-e300-4715-ad66-c1d8883cd075"
        }
      ]
    },
    {
      "index": 59,
      "created_at": 1418155683076,
      "bookmarks": [
        {
          "id": "6f129d13-8c81-4e9a-a84c-4fe95eba8977"
        },
        {
          "id": "a9a14139-4809-4455-a1d5-6c44fd460f52"
        },
        {
          "id": "b42c53eb-22f0-409a-9812-e84068943646"
        },
        {
          "id": "342d29c4-2ee9-4e62-a01f-29c31aea5b8c"
        },
        {
          "id": "1179f9f5-7c80-4de3-a8b9-518ad1993ba0"
        },
        {
          "id": "6f3168ad-b176-4f57-b86d-6b6eb8fdcfd6"
        },
        {
          "id": "7ab84752-a9b5-426d-899f-7a545197de12"
        },
        {
          "id": "b3ca4446-34e1-46e0-8a7c-800b84767ce0"
        },
        {
          "id": "15c8859a-24e0-4320-8a01-b6f3eeb0ff63"
        }
      ]
    },
    {
      "index": 60,
      "created_at": 1547427802770,
      "bookmarks": [
        {
          "id": "4f9982a3-dcf0-463b-9a57-ad31d9726d24"
        },
        {
          "id": "f4c947c5-6542-42b2-9ac9-5cb20bf26e02"
        },
        {
          "id": "c96c757c-8e20-4eea-820b-ca834c0b01e1"
        },
        {
          "id": "26da5d3b-4074-4bca-8be3-9279390c6ae1"
        },
        {
          "id": "17ea88d1-499d-4939-8d26-c718da8e88c7"
        },
        {
          "id": "5f5fd685-ac21-405c-bf0a-ef0e32e2e36a"
        },
        {
          "id": "4e48b35f-fde7-4bfc-b52e-e3787288cc35"
        },
        {
          "id": "8ecd5e72-3b9e-4894-9986-ecab6becdf83"
        },
        {
          "id": "d2807af6-0d03-485f-98fa-677644ac9414"
        },
        {
          "id": "73ed34b4-da10-4338-809b-5ccc889fd11d"
        }
      ]
    },
    {
      "index": 61,
      "created_at": 1447520166600,
      "bookmarks": [
        {
          "id": "3227da80-ffe8-4c08-ac46-dccb5c3f092c"
        },
        {
          "id": "137c86bb-af7b-49cb-ba68-c3d400512bff"
        },
        {
          "id": "4c112ac2-4f03-4737-afc3-6c5ea51c8d0d"
        }
      ]
    },
    {
      "index": 62,
      "created_at": 1426779442916,
      "bookmarks": [
        {
          "id": "b8e0db12-70c3-4b7f-ae92-1e8b8a43dd8c"
        },
        {
          "id": "85bf1f37-fb69-4c7b-9e78-93be8d6d73fc"
        },
        {
          "id": "94327376-a6a4-4cd0-9391-af2160b9404f"
        },
        {
          "id": "9f63fff5-0237-4a0b-a080-a92f4baee0b7"
        },
        {
          "id": "e26a9f1f-53b4-4582-a984-02f1c820db05"
        },
        {
          "id": "410e3e7c-0619-4045-b514-d479fe2707a0"
        },
        {
          "id": "d29e3d80-e522-4b4b-b99a-bc0d333716c0"
        },
        {
          "id": "c84d4930-6aa5-40c7-8ef7-fbd555718c24"
        },
        {
          "id": "c74b4625-2309-43d4-985b-62a4234288e1"
        },
        {
          "id": "fb233a1d-799f-4c2d-b53f-8aa1e2bcc240"
        }
      ]
    },
    {
      "index": 63,
      "created_at": 1494934361991,
      "bookmarks": [
        {
          "id": "b24faf15-5a5e-49b7-84fe-1f15fa40e29a"
        },
        {
          "id": "48434ea0-99f7-414c-98d0-5d6c2b11214d"
        },
        {
          "id": "84a002b8-cc87-40f3-a83a-0dc8b54627df"
        },
        {
          "id": "47ace70c-6a9c-4199-b804-5bd53bd781cf"
        },
        {
          "id": "d931fe57-a590-43d4-aee3-f232de9e0b5c"
        },
        {
          "id": "606df5be-180d-4103-a2db-2812ad26c2fa"
        },
        {
          "id": "063b2b23-de53-4738-a020-2369dc7e4dc4"
        },
        {
          "id": "69321838-6c08-4a37-9a49-d327e72c969f"
        },
        {
          "id": "818ab201-8262-4d26-be19-393a10ed37ba"
        },
        {
          "id": "e8e90c2a-7a86-4eea-bd95-454a20c8b3b3"
        }
      ]
    },
    {
      "index": 64,
      "created_at": 1491136157200,
      "bookmarks": [
        {
          "id": "d2511bdb-f3f4-4864-bc5f-7ec3d5407f84"
        },
        {
          "id": "63d00045-3b11-495a-85d2-5443faf6e1ae"
        },
        {
          "id": "b00ac302-b12f-4bf7-b6eb-d32f6925d8a0"
        }
      ]
    },
    {
      "index": 65,
      "created_at": 1403925048250,
      "bookmarks": [
        {
          "id": "7a570eed-204d-4741-b6a8-3d9610d88c8c"
        },
        {
          "id": "ce3fca6f-9693-4e34-b173-f483bb72bf1e"
        },
        {
          "id": "c6d41bb9-207d-4992-99fe-c1f54da9d017"
        },
        {
          "id": "11ef9531-763a-4330-b9ea-7ebd8c8f9f53"
        },
        {
          "id": "ca9eab03-76fd-4d85-993f-829c9f66e0e3"
        },
        {
          "id": "b2725d6e-8f33-49a2-967c-0cca41380d0a"
        },
        {
          "id": "f781a57a-cb2c-415b-b949-bd78e380cbe9"
        },
        {
          "id": "f686a3dd-7e2b-4252-a593-a12ec45df494"
        },
        {
          "id": "7b62d894-56e1-42ac-977f-7159cc9a1b96"
        }
      ]
    },
    {
      "index": 66,
      "created_at": 1544277620470,
      "bookmarks": [
        {
          "id": "10b7b939-480f-4969-bf8c-792ea5a667f1"
        },
        {
          "id": "a6943bd9-9b7e-4857-bca1-c7ee135e5257"
        }
      ]
    },
    {
      "index": 67,
      "created_at": 1482965151647,
      "bookmarks": [
        {
          "id": "215a62f8-6699-48a8-9fc3-c673808c279c"
        },
        {
          "id": "0ea37026-be0a-4030-8291-9be1cd6ba397"
        },
        {
          "id": "618c2992-de61-4b98-b630-3b0d23871541"
        },
        {
          "id": "9a8d6f3a-fd8e-4f69-9ae7-2de64e23d9d6"
        },
        {
          "id": "a157a9d5-26cf-419d-ae46-51612bc42a6e"
        },
        {
          "id": "d6eb2d63-75d9-4208-ba2a-847e02d733e8"
        },
        {
          "id": "249b3ebf-909d-42b9-a8d1-84c0f99900a5"
        },
        {
          "id": "b92cfbef-cee3-4a8c-8b45-ac7eefe21434"
        },
        {
          "id": "8a8dc15b-baab-424d-904e-041f60267a48"
        }
      ]
    },
    {
      "index": 68,
      "created_at": 1548969417635,
      "bookmarks": [
        {
          "id": "54ba9e33-9b9e-40cc-9da0-978834048f89"
        },
        {
          "id": "4a598616-f9b4-49f0-a8df-4aaf66434f44"
        },
        {
          "id": "5d88e21b-6153-4e87-83e5-3e4ae0f49aef"
        }
      ]
    },
    {
      "index": 69,
      "created_at": 1437231303942,
      "bookmarks": [
        {
          "id": "f7c998e6-187a-4eb1-9caa-209d361873a6"
        },
        {
          "id": "56fa2e18-e2f5-4a96-b76f-ac007c6b4e5f"
        },
        {
          "id": "4ae4e8ca-9708-4076-9504-1c6208a5e395"
        },
        {
          "id": "ffd83d00-6310-4a19-8040-bc5cf8f050cf"
        }
      ]
    },
    {
      "index": 70,
      "created_at": 1504231382665,
      "bookmarks": [
        {
          "id": "fd9d5b0d-7885-4107-ba97-ab82d7a3fb80"
        },
        {
          "id": "67479d75-2d7c-4800-80ba-c0aed980b52f"
        },
        {
          "id": "7384d02a-1894-4ca6-b33d-bae632288bbf"
        },
        {
          "id": "2ff4830e-ebb8-4d2b-a8ab-878d2a9e319b"
        },
        {
          "id": "8c11b9ce-3881-4e10-950c-fe004f29b980"
        },
        {
          "id": "1c0609f8-2ccd-4190-ad6b-c1b84bd04bd6"
        },
        {
          "id": "946aecf5-5112-4423-88a4-8a48e2624712"
        },
        {
          "id": "972de733-2854-4992-9771-bb91c7733f31"
        },
        {
          "id": "712d3839-24bc-4997-8ee7-b610a7711812"
        },
        {
          "id": "867001b8-4e85-4543-a56b-0529e6842936"
        }
      ]
    },
    {
      "index": 71,
      "created_at": 1475994215749,
      "bookmarks": [
        {
          "id": "dfc71e19-d335-4cf6-aac1-59f5e90cb2ab"
        }
      ]
    },
    {
      "index": 72,
      "created_at": 1498702396286,
      "bookmarks": [
        {
          "id": "c82ad2e9-3b3c-44ea-ab49-04e8a4bb5dbc"
        },
        {
          "id": "1bab8ca1-6868-4c5e-bb21-c2dc4d5e7566"
        },
        {
          "id": "e87e9a38-ebb6-409e-bea3-0a6c7bfc05a6"
        },
        {
          "id": "7f0947b5-0e17-4ecc-b887-279c04e2d09c"
        },
        {
          "id": "eef8a0ec-f27b-4169-a300-600e1cbdea86"
        }
      ]
    },
    {
      "index": 73,
      "created_at": 1450374400937,
      "bookmarks": [
        {
          "id": "86bb25cf-56cd-4df0-9eff-b1547750a463"
        },
        {
          "id": "31e23f6f-d622-4c67-84ca-496e5d3b5797"
        },
        {
          "id": "43a96e85-0e65-4a9b-a0a5-b9d38a2327e8"
        },
        {
          "id": "42ef7871-777f-4433-820d-ee8393c41324"
        },
        {
          "id": "6d00efd9-31e0-44e8-9d12-94f1dd0169a9"
        },
        {
          "id": "3a0352c3-e8dd-4b3c-9264-510d7d229a15"
        },
        {
          "id": "16d2aeaa-9481-4162-8049-f032535880ed"
        }
      ]
    },
    {
      "index": 74,
      "created_at": 1396373908775,
      "bookmarks": [
        {
          "id": "c478b7a6-01a0-44c9-9441-d1792f2c5972"
        },
        {
          "id": "205769d8-9f47-498b-9c9f-4d119649a87e"
        },
        {
          "id": "346a6a64-8f26-4e9d-8232-02372b662cca"
        }
      ]
    },
    {
      "index": 75,
      "created_at": 1400687478989,
      "bookmarks": [
        {
          "id": "35ee7c68-86a3-457c-8ea1-6a1ca87add48"
        },
        {
          "id": "a9b03670-5eae-43e9-bd5c-f432a88a4700"
        },
        {
          "id": "bc215808-1d88-4a67-a57d-af0e15d6264b"
        },
        {
          "id": "fe60bcbc-be46-4ebf-9256-e40dfede1344"
        },
        {
          "id": "4dcc59bd-bd04-41b4-af13-10b4ab33078f"
        },
        {
          "id": "07be58fe-b57d-4a83-8f39-7b1c98899f70"
        },
        {
          "id": "493a7340-b665-410c-bdfa-6d3119dd4bd6"
        },
        {
          "id": "205333f4-a178-4c24-881f-37c69f5c32e7"
        },
        {
          "id": "7208220b-143e-4d66-a0ff-180851198ec3"
        },
        {
          "id": "ec3c693c-597b-4159-8bc5-0c15c3367cb5"
        }
      ]
    },
    {
      "index": 76,
      "created_at": 1561517730421,
      "bookmarks": [
        {
          "id": "e95c3236-27bb-4154-8c2c-63d6b1c93553"
        },
        {
          "id": "52f4bb31-af45-46aa-88bb-6c70fa91fb34"
        },
        {
          "id": "1ac06894-4892-40fd-8fd6-d896422946bd"
        },
        {
          "id": "70f9655e-e0e3-4275-af32-07ce9b733105"
        },
        {
          "id": "c5426edc-13e4-4c61-ba30-a03ffc90bdb4"
        },
        {
          "id": "910fa4c4-c39f-48b8-ac85-6a4e37527668"
        },
        {
          "id": "8d543422-de63-4044-9454-30612e749cb5"
        },
        {
          "id": "8b5c6568-6a1f-471f-88ed-aca17163918c"
        }
      ]
    },
    {
      "index": 77,
      "created_at": 1561429478117,
      "bookmarks": [
        {
          "id": "0ec477ae-a10d-43ea-af63-551a16e89c6b"
        },
        {
          "id": "2c4e118a-33fd-4b45-a5d9-aed0816fcb85"
        },
        {
          "id": "1b3a5f94-1bdb-42fd-848e-4799ddd1251c"
        },
        {
          "id": "a1e66faf-74dc-439e-9bcf-feb16142adbf"
        },
        {
          "id": "e38f8347-09a2-4b7e-a146-ef7d0496be0d"
        },
        {
          "id": "63d18bc0-3dc6-4f2e-90f1-78f0e0787a1c"
        },
        {
          "id": "d888eb17-db68-4f2b-a742-d60ed978cf2b"
        }
      ]
    },
    {
      "index": 78,
      "created_at": 1434392382738,
      "bookmarks": [
        {
          "id": "68958dfd-f87f-472b-9c0f-07671d189683"
        },
        {
          "id": "d2006572-4b09-4ca1-a288-c358e3b3e98a"
        },
        {
          "id": "d3fe9965-d09f-4ec9-9173-81ba9a981c88"
        },
        {
          "id": "b8cd0913-59c5-4a46-a599-2f8e2f8951c3"
        },
        {
          "id": "0a98862d-8c4d-497e-87e5-910dbfa594b7"
        },
        {
          "id": "4200525e-c1a0-4fe6-aef6-c639bb9b8551"
        },
        {
          "id": "9da19240-84b7-4728-a399-aae92bef4896"
        },
        {
          "id": "fc12b9ae-7e20-4bb1-b1d9-d177b4d33924"
        },
        {
          "id": "e06e0417-21de-48c6-b492-9950660d5f9d"
        },
        {
          "id": "aabdc189-b2e3-4277-bec4-eb327f8a0ae3"
        }
      ]
    },
    {
      "index": 79,
      "created_at": 1515184126747,
      "bookmarks": [
        {
          "id": "76f38acb-3b05-42dc-b554-6d3966128de6"
        },
        {
          "id": "9e5a423a-420f-4c0f-b3fb-c836836ee6e1"
        },
        {
          "id": "db0fddbc-231e-4861-85aa-29d3bd851de9"
        },
        {
          "id": "135e8c45-210d-4aef-83a9-05c953dc3823"
        },
        {
          "id": "97d2fa3d-eed9-42a0-a128-364a74ac5d91"
        }
      ]
    },
    {
      "index": 80,
      "created_at": 1400750716721,
      "bookmarks": [
        {
          "id": "65abe373-84b3-40a4-b26d-7c5dec4080ee"
        },
        {
          "id": "48903f1a-68a4-4d5b-9631-74b9fc3adf11"
        },
        {
          "id": "991dcdf1-9133-4f72-b9f0-06de6a8d518a"
        },
        {
          "id": "5e0cb1a5-3d47-41b5-925b-4b039698c678"
        },
        {
          "id": "3be4eeae-871f-458f-9250-98291d318713"
        }
      ]
    },
    {
      "index": 81,
      "created_at": 1481210191865,
      "bookmarks": [
        {
          "id": "c8094d0d-dfc3-4c65-a328-52adeb631c42"
        },
        {
          "id": "487e3834-3512-47e9-a79b-7f7e91ae2176"
        },
        {
          "id": "72aaf02a-53be-41c8-bfcb-64080d1f6ffe"
        },
        {
          "id": "4b4be18d-576e-4148-b882-4835b341c4a2"
        },
        {
          "id": "af4ba406-4c89-4b54-b9c7-818519638bd9"
        },
        {
          "id": "fb6a8ca2-ab67-4a78-b31a-dcf605528e8c"
        },
        {
          "id": "788a1bec-69e5-4898-9d57-a416c5d3d1c3"
        }
      ]
    },
    {
      "index": 82,
      "created_at": 1433857904455,
      "bookmarks": [
        {
          "id": "c998f89f-b4d9-4496-87cd-30a1b0c4c319"
        }
      ]
    },
    {
      "index": 83,
      "created_at": 1442846503722,
      "bookmarks": [
        {
          "id": "1185e7c0-69bb-4fef-a2d1-bcc6ea0f557c"
        },
        {
          "id": "2d5b166f-de19-496a-8b59-1af80532e4b4"
        },
        {
          "id": "11631d20-5f87-4085-a1fa-be4f86d75eb9"
        }
      ]
    },
    {
      "index": 84,
      "created_at": 1567025786287,
      "bookmarks": [
        {
          "id": "3cbcce78-b546-42c5-80c8-304db7c924a6"
        },
        {
          "id": "d1b105f4-9fae-4c26-a45b-3856c3ccb4d4"
        }
      ]
    },
    {
      "index": 85,
      "created_at": 1468702431065,
      "bookmarks": [
        {
          "id": "19606ef9-9baa-41d3-8f9b-bd83b3c1e25b"
        },
        {
          "id": "7a2e089f-e71f-416a-9504-1d3479d815fd"
        },
        {
          "id": "dc24b13c-3a5d-43a3-a944-b053ebc959ab"
        },
        {
          "id": "b812bbe2-23d9-4524-acc7-12116bdd1dc6"
        },
        {
          "id": "e0df6753-1e29-4a36-91c5-94abf9616161"
        },
        {
          "id": "7d50715b-1eb4-4ff8-941b-93ae530121c0"
        },
        {
          "id": "8f2883f3-2749-41b8-988d-53aee7cac1e6"
        },
        {
          "id": "033170ee-e843-42b2-a14d-858575667268"
        },
        {
          "id": "534a3d25-2914-4877-8b8d-7442177fef6d"
        },
        {
          "id": "0182d6a1-c5e9-4b0d-9bfb-df298211b99a"
        }
      ]
    },
    {
      "index": 86,
      "created_at": 1423372312706,
      "bookmarks": [
        {
          "id": "1770bd4a-db43-4b2e-b5d5-89a878ede1c0"
        }
      ]
    },
    {
      "index": 87,
      "created_at": 1433956987270,
      "bookmarks": [
        {
          "id": "6dea476e-e088-445c-9c8f-1fa610de89de"
        },
        {
          "id": "21872c9a-60cc-4f22-b8b1-428f3d7425c2"
        },
        {
          "id": "a4c29ad9-6d2c-441d-9796-31c5076f7c8b"
        },
        {
          "id": "b414a5d2-09fb-406a-9225-db80e8022dc7"
        },
        {
          "id": "21b271e4-c1a8-4abf-858a-84b6a0f708dd"
        },
        {
          "id": "e9fd7ca5-2c9a-41b5-bfc7-ca865f274e40"
        },
        {
          "id": "4305ca2f-e90a-4f6d-9d8e-e11c7ddd5a34"
        },
        {
          "id": "c55e8c70-759c-47e9-8ce3-47b6dc8ad3f4"
        },
        {
          "id": "a81d870f-40b9-4603-9180-a784d06ade13"
        }
      ]
    },
    {
      "index": 88,
      "created_at": 1485513056167,
      "bookmarks": [
        {
          "id": "202ee873-b44d-4413-b43d-b2dc695d55c1"
        },
        {
          "id": "ba772f70-0a84-4ad0-96f5-c4f246deca7a"
        },
        {
          "id": "ce2e0a59-03aa-440a-bbb0-1da048ddfd6f"
        }
      ]
    },
    {
      "index": 89,
      "created_at": 1507544992450,
      "bookmarks": [
        {
          "id": "360d110b-f2f8-4a62-b257-7d6c31e1efb9"
        },
        {
          "id": "2883dc09-0270-4108-bea5-3a4409ec3068"
        },
        {
          "id": "5fe3b27e-2216-445f-a8a5-9e4cf57c50ab"
        },
        {
          "id": "eab02d57-334b-4d6a-a63e-e79ad36235db"
        }
      ]
    },
    {
      "index": 90,
      "created_at": 1476339884604,
      "bookmarks": [
        {
          "id": "53464562-cb88-4e6f-95ae-9dc049bacb89"
        },
        {
          "id": "23b58475-e5f7-4b91-9745-5763342d39f6"
        },
        {
          "id": "701d4347-fbf9-45fd-9ac6-0b6e65b48955"
        },
        {
          "id": "91e8910a-8834-4802-a04e-264f07d37d14"
        }
      ]
    },
    {
      "index": 91,
      "created_at": 1493193766844,
      "bookmarks": [
        {
          "id": "252dcd59-22c9-4040-ac7e-e35c5a6e35d9"
        },
        {
          "id": "bf3f4a18-7528-41dc-ae63-d3a3f8238a85"
        },
        {
          "id": "5f45cc46-e68f-4dc7-922b-5220f5f1d176"
        },
        {
          "id": "cdd49c6f-cd1d-477a-9d32-508db73cdbd8"
        },
        {
          "id": "8d402802-51cc-43f5-bd67-802b80804372"
        },
        {
          "id": "0ea7f8bd-3a0a-4873-81ba-660bee75b351"
        },
        {
          "id": "3fc3f32f-a312-4c93-a33d-f5d9e2084053"
        },
        {
          "id": "d9228df0-9908-4704-8a95-91153f4d2d5a"
        },
        {
          "id": "fb67c168-9476-4c35-b761-d2f31f8b279d"
        },
        {
          "id": "95e4a121-6067-4ba2-9a56-2db6b57c38fe"
        }
      ]
    },
    {
      "index": 92,
      "created_at": 1497647977635,
      "bookmarks": [
        {
          "id": "7b615a2b-8dc6-446d-80bc-93f7cfcb99bf"
        },
        {
          "id": "39fa6897-57e7-449f-af8f-1ed0dfca57e1"
        },
        {
          "id": "3e6ed7d2-7623-437b-bfd0-2d9e6c448948"
        }
      ]
    },
    {
      "index": 93,
      "created_at": 1560963443955,
      "bookmarks": [
        {
          "id": "70beafd6-64f9-486f-9ba8-590c8db6a55a"
        },
        {
          "id": "3b339a39-43b5-43e5-9fc6-4ffda3c78163"
        },
        {
          "id": "e5b3bf4d-1384-47ec-a837-280f47421d38"
        },
        {
          "id": "d19d68cd-4433-4338-9f23-b301fde0e36c"
        },
        {
          "id": "dc8bb419-a487-4449-ae38-d5998f2a004b"
        },
        {
          "id": "7a548d29-06c0-4e37-b1d9-1e7c0ceaf9ce"
        },
        {
          "id": "6918cc31-8a1f-4e8c-8707-f0f51e4b3f8d"
        },
        {
          "id": "333fa13d-622b-4c2a-8d94-b9abe32896b8"
        },
        {
          "id": "5365cadf-5534-4804-98dc-33f4a85602f7"
        }
      ]
    },
    {
      "index": 94,
      "created_at": 1396327093466,
      "bookmarks": [
        {
          "id": "b8609cbb-dcef-4a7f-b44b-2387bf1741f8"
        },
        {
          "id": "f655a7c2-24af-4dbc-864e-c0a8b72c9e11"
        },
        {
          "id": "3762620c-295a-4d49-b930-2f8389ae8c14"
        },
        {
          "id": "92c80858-f342-4173-b89f-7a41da4375dc"
        },
        {
          "id": "0470cd1f-a412-45da-ac70-f825dc3dd44d"
        },
        {
          "id": "6a756866-6b16-4833-8e97-c491b7a92f22"
        },
        {
          "id": "3912edc7-9b4b-40b5-bf44-922be2a779cf"
        },
        {
          "id": "4d819501-2367-4c38-adb8-df259c077984"
        },
        {
          "id": "d4ead9ba-c5c7-40de-b52a-1214284de2ad"
        },
        {
          "id": "6d100c86-eed0-46e3-a2d3-ab93ef500a58"
        }
      ]
    },
    {
      "index": 95,
      "created_at": 1427122982973,
      "bookmarks": [
        {
          "id": "234fee09-1d87-4499-8e67-0b0291566672"
        },
        {
          "id": "230131fe-d4be-415f-828c-96ef84d9567b"
        },
        {
          "id": "0516fddc-3bc8-44e9-8214-da7e4df99c72"
        },
        {
          "id": "b172b103-5517-4033-a718-e3c14a6f6690"
        },
        {
          "id": "a3be445c-3afb-438e-abd3-24577679c563"
        },
        {
          "id": "2aace10d-fde8-46c9-b9c8-ec9e26beb674"
        }
      ]
    },
    {
      "index": 96,
      "created_at": 1430274640041,
      "bookmarks": [
        {
          "id": "4a395328-6f26-4ce1-911e-2cbf4a22748e"
        },
        {
          "id": "10a192ae-0538-4eac-bd29-d1871cc38fdd"
        },
        {
          "id": "12540050-b7cd-47bd-8fa0-06b6c4729315"
        },
        {
          "id": "16985313-51ad-4a02-9d7a-fd4a8d556d8b"
        },
        {
          "id": "8a9f95b8-97d4-4597-9c8b-cfc58809aa5c"
        }
      ]
    },
    {
      "index": 97,
      "created_at": 1519294657336,
      "bookmarks": [
        {
          "id": "045e1cbc-6e10-476f-b772-1c4a42ea04fd"
        },
        {
          "id": "7bb9b8ac-abd9-4569-83dc-5d720cdd07ab"
        },
        {
          "id": "dabb4f61-26ab-4d29-9b30-dfece28848be"
        },
        {
          "id": "e385544c-f48a-4e24-a654-b8db5b47503a"
        },
        {
          "id": "01d5abc7-20ad-4c7f-9821-2c369dec331d"
        },
        {
          "id": "2eb5ab4c-854f-4e41-ac9f-ce8a3cadfac3"
        }
      ]
    },
    {
      "index": 98,
      "created_at": 1460028875810,
      "bookmarks": [
        {
          "id": "6570a610-fb84-4477-b2a6-df12f13d3bba"
        },
        {
          "id": "3c9c7cf4-406e-4edf-9639-e3c7db8244b5"
        }
      ]
    },
    {
      "index": 99,
      "created_at": 1564502157980,
      "bookmarks": [
        {
          "id": "d86d0717-33dc-4670-9bf0-662ea0e3504a"
        },
        {
          "id": "bb36c788-13ad-4445-8595-06dc1fafd3aa"
        },
        {
          "id": "b7bd81cb-2bb7-4e59-8e8d-560ff43c32c0"
        },
        {
          "id": "4af13417-c032-4558-a355-fdea35e05c9f"
        },
        {
          "id": "be127bfd-0b65-468a-9125-834fa9dcd0a8"
        },
        {
          "id": "582b60e5-6b35-479b-bc7e-1182733755a4"
        },
        {
          "id": "f26214eb-f56a-41a1-9ab4-f32fcb230462"
        },
        {
          "id": "baf72064-27d5-4015-85fb-af73517ca0fc"
        },
        {
          "id": "c91008c3-6872-458b-a862-5a22cfb2ba06"
        },
        {
          "id": "beabf0cf-3b38-4ff4-a1d1-af9964d57db3"
        }
      ]
    }
  ]
  timeStamps.sort((a, b) => {
    const c = new Date(a.created_at);
    const d = new Date(b.created_at);
    return d - c;
  })
  console.log('timestamps', timeStamps)
  return timeStamps
}

export default reducer