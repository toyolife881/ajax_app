class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end

  # def new
  # end

  def create
    # Post.create(content: params[:content])
    # # indexアクションにリダイレクト
    # redirect_to action: :index

    post = Post.create(content: params[:content])
    # renderメソッドで、レスポンスで返却されるデータフォーマットにJSONを指定
    # jsonオプションで、{ post: post}というデータをJSON形式で返却
    # { post: post}は、{ キー: 変数postの値}
    render json:{ post: post}
  end
end
