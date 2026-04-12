#version 450

layout(location = 0) in vec3 fragcolor;

layout(location = 0) out vec4 outcolor;

void main() {
    outcolor = vec4(fragcolor, 1.0);
}
