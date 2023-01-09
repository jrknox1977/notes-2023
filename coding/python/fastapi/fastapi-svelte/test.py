# fastAPI test
# 2021-09-14 10:00:00
import uvicorn
from fastapi import FastAPI

app = FastAPI()

POSTS = [{
    'id': 1,
    'title': 'test'
    },
    {
    'id': 2,
    'title': 'test2'
    },
    {
    'id': 3,
    'title': 'test3'
    }]

@app.get('/')
async def get_all_posts():
    return POSTS

@app.get('/{id}')
async def get_one_post(id: int):
    return POSTS[id-1]
