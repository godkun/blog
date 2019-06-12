/**
 * 优化下面的写法
 * document.querySelector('#msg').innerHTML = '<h1>Hello World'</h1>'
 */

const  compose = ( ...fns ) => fns.reduce( ( f, g ) => ( ...args ) => f( g( ...args ) ) );
