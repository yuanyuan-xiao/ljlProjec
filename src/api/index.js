import mockRequest from './mockRequest'
import http from '@/request/http'

 
export const mockUser = () => mockRequest.get('user');
export default {
    login:'/api'
}