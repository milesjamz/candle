class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :birthday, :email, :avatar, :followers, :following, :given_follows, :received_follows
end
