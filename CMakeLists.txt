cmake_minimum_required(VERSION 3.15)
project(vulkan_triangle)

set(CMAKE_CXX_STANDARD 17)

# 查找依赖包
find_package(Vulkan REQUIRED)
find_package(glfw3 REQUIRED)

# 添加可执行文件
add_executable(vulkan_triangle main.cpp)

# 链接库
target_link_libraries(vulkan_triangle Vulkan::Vulkan glfw)

